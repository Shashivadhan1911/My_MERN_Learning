import React, { useState } from 'react';

const Payment = () => {
    const [amount, setAmount] = useState(500); // amount in rupees
    const [loading, setLoading] = useState(false);

    const createOrder = async () => {
        try {
            console.log('Creating order with amount:', Number(amount) * 100);
            const response = await fetch('http://localhost:5001/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: Number(amount) * 100 }), // send in paisa
            });
            const order = await response.json();
            return order;
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Error creating order. Please try again.');
            return null;
        }
    };

    const verifyPayment = async (response) => {
        try {
            const verifyResponse = await fetch('http://localhost:5001/verify-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    amount: Number(amount) * 100, // send in paisa for consistency
                }),
            });
            const result = await verifyResponse.json();
            if (result.status === 'success') {
                alert('Payment verified and saved successfully!');
            } else {
                alert(`Payment verification failed: ${result.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Error verifying payment. Please check console for details.');
        }
    };

    const loadRazorpay = async () => {
        setLoading(true);
        const order = await createOrder();
        if (!order) {
            setLoading(false);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onerror = () => {
            console.error("Razorpay SDK failed to load.");
            alert("Razorpay SDK failed to load. Are you online?");
            setLoading(false);
        }
        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                currency: order.currency,
                amount: order.amount,
                order_id: order.id,
                name: "Test Payment",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                handler: function (response) {
                    verifyPayment(response);
                    setLoading(false);
                },
                prefill: {
                    name: "Test User",
                    email: "user1@gmail.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: { color: "#3399cc" },
            };
            try {
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (error) {
                console.error("Error creating Razorpay object:", error);
                alert("Error initializing payment. Please try again.");
                setLoading(false);
            }
        };
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-lg w-full border border-white border-opacity-20">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-white drop-shadow-lg">Payment Page</h1>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Amount in INR"
                    className="w-full px-5 py-4 mb-6 border border-white border-opacity-30 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
                />
                <button
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    onClick={loadRazorpay}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </div>
    );
}

export default Payment;

// api-key = rzp_test_RFPDJcRWZBfLVL
