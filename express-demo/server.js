const express = require("express");
const app = express();
const PORT = 7533;

// Middleware to parse JSON bodies
app.use(express.json());

//Routes
app.get("/",(req,res)=>{
    res.send("Hello, Express is Working!");
});

app.get("/about",(req,res)=>{
    res.json({message:"This is Express.js backend"});
});

app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
});