const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('dotenv').config();

const User = require('./models/user');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.monogodb_url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error',err));

app.get('/', (req, res) => {
    res.send('Express and MongoDB is working');
});

app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user =    await User.findById(req.params.id);
        if (!user) return res.status(404).json({message: 'User not found'});
        res.json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }  
});

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedUser) return res.status(404).json({message: 'User not found'});
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

