const express = require('express');
const dotenv = require("dotenv");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

dotenv.config();
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(cors());

const User = require('./models/user');


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("mongoDB Connected.."))
  .catch((err) => console.log("mongoDB error", err));

app.get("/", async (req, res) => {
  res.send("mongodb connected");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/register',async(req, res)=>{
    const {name,email,password,role}=req.body;
    const user1 = await User.findOne({email});
    if (user1){
        return res.status(400).send("User exist!!");
    }
    const hashedpass = await bcrypt.hash(password,10);
    const user = new User({name,email,password: hashedpass,role});
    await user.save();
    res.status(200).send("User registered successfully");
});

app.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).send("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).send("Invalid credentials");
        }
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({token, user: {name: user.name, email: user.email, role: user.role}});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send("Internal server error");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
