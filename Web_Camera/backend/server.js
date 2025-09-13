const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const Image = require("./models/image");

// Load .env first
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Allow large payloads for images

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
console.log("MONGO_URI:", mongoURI);
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Upload endpoint
app.post("/upload", async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ message: "No image provided" });
    }

    // Remove the data URL prefix if present (e.g., "data:image/jpeg;base64,")
    const base64Data = image.replace(/^data:image\/[a-z]+;base64,/, "");

    // Generate a unique filename
    const filename = `image_${Date.now()}.jpg`;

    // Save image to MongoDB
    const newImage = new Image({
      filename,
      data: base64Data,
      contentType: "image/jpeg",
    });

    await newImage.save();

    res.json({ message: "Image uploaded successfully", filename });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Error uploading image" });
  }
});

// Endpoint to get all images metadata
app.get("/images", async (req, res) => {
  try {
    const images = await Image.find({}, "filename uploadedAt");
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Error fetching images" });
  }
});
app.get('/',async(req,res)=>{
  res.send("MongoDB Connected");
});

// Endpoint to get all images with data
app.get("/images/data", async (req, res) => {
  try {
    const images = await Image.find({}, "filename data contentType uploadedAt");
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Error fetching images" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
