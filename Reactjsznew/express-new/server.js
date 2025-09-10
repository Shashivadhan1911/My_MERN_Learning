const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Razorpay = require('razorpay')
const bodyParser = require('body-parser')
const cors = require('cors')
const crypto = require('crypto')
const Payment = require('./model/payment')

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = process.env.mongodb_url || 'mongodb://localhost:27017/paymentdb';

mongoose.connect(mongoUrl).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Initialize Razorpay conditionally
let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} else {
  console.log('Razorpay keys not set, payment features disabled');
}

const PORT = process.env.PORT||5001;



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/create-order', async (req, res) => {
    if (!razorpay) {
        return res.status(500).json({ error: 'Razorpay not configured' });
    }
    const { amount, currency = 'INR' ,receipt} = req.body;
    const options = {
        amount: amount, // amount in paisa
        currency,
        receipt: `receipt_${Math.random()*1000}`,
    };
    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/save-payment', async (req, res) => {
  try {
    const paymentData = req.body;
    const payment = new Payment(paymentData);
    await payment.save();
    res.json({ message: "Payment saved Successfully" });
  } catch (error) {
    res.status(500).send('Error saving payment');
  }
});


app.post('/verify-payment', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;

        // Validate required fields
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            console.error('Missing required payment verification fields');
            return res.status(400).json({
                status: 'failure',
                message: 'Missing required payment verification fields'
            });
        }

        // Check if Razorpay is initialized
        if (!razorpay) {
            console.error('Razorpay not configured');
            return res.status(500).json({
                status: 'failure',
                message: 'Payment service not configured'
            });
        }

        // Check if RAZORPAY_KEY_SECRET is available
        if (!process.env.RAZORPAY_KEY_SECRET) {
            console.error('RAZORPAY_KEY_SECRET not set');
            return res.status(500).json({
                status: 'failure',
                message: 'Payment verification service unavailable'
            });
        }

        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        console.log('Verifying payment:');
        console.log('Order ID:', razorpay_order_id);
        console.log('Payment ID:', razorpay_payment_id);
        console.log('Received signature:', razorpay_signature);
        console.log('Expected signature:', expectedSign);

        if (razorpay_signature === expectedSign) {
            const payment = new Payment({
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                amount: amount / 100, // Convert paisa to rupees for storage
                status: 'paid',
            });
            await payment.save();
            console.log('Payment verified and saved successfully');
            res.json({ status: 'success' });
        } else {
            console.error('Signature verification failed');
            res.status(400).json({
                status: 'failure',
                message: 'Payment verification failed - invalid signature'
            });
        }
    } catch (error) {
        console.error('Error in payment verification:', error);
        res.status(500).json({
            status: 'failure',
            message: 'Internal server error during payment verification'
        });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});