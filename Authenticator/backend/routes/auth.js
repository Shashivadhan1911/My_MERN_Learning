const express = require("express");
const router = express.Router();
const User = require("../models/User");
const twilio = require("twilio");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ===== Middleware to verify JWT =====
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(400).json({ message: "Invalid token" });
  }
};

// ===== Twilio client setup =====
let client;
if (process.env.TWILIO_SID && process.env.TWILIO_AUTH_TOKEN) {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
}

// ===== OTP generator =====
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ===== Send OTP =====
router.post("/send-otp", async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: "Phone number required" });

  let formattedPhone = phone.startsWith("+") ? phone : "+91" + phone;

  try {
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min expiry

    let user = await User.findOne({ phone: formattedPhone });
    if (!user) {
      user = new User({
        phone: formattedPhone,
        otp,
        otpExpiry,
        otpAttempts: 0,
      });
    } else {
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      user.otpAttempts = 0;
    }
    await user.save();

    // Send OTP via Twilio or log for testing
    if (client) {
      await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: process.env.TWILIO_PHONE,
        to: formattedPhone,
      });
    } else {
      console.log(`OTP for ${formattedPhone}: ${otp}`);
    }

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in send-otp:", error.message, error.stack);
    res.status(500).json({ message: error.message || "Server error" });
  }
});

// ===== Verify OTP =====
router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    return res.status(400).json({ message: "Phone and OTP required" });
  }

  let formattedPhone = phone.startsWith("+") ? phone : "+91" + phone;

  try {
    const user = await User.findOne({ phone: formattedPhone });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    if (user.otp !== otp) {
      user.otpAttempts = (user.otpAttempts || 0) + 1;
      await user.save();
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // Clear OTP
    user.otp = undefined;
    user.otpExpiry = undefined;
    user.otpAttempts = 0;
    await user.save();

    // Generate JWT
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in environment variables");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "OTP verified successfully",
      token,
      user: { _id: user._id, phone: user.phone },
    });
  } catch (error) {
    console.error("Error in verify-otp:", error.message, error.stack);
    res.status(500).json({ message: error.message || "Server error" });
  }
});

// ===== Register new user (with OTP) =====
router.post("/register", async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: "Phone number required" });

  let formattedPhone = phone.startsWith("+") ? phone : "+91" + phone;

  try {
    let user = await User.findOne({ phone: formattedPhone });
    if (user)
      return res.status(400).json({ message: "User already registered" });

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    user = new User({ phone: formattedPhone, otp, otpExpiry, otpAttempts: 0 });
    await user.save();

    if (client) {
      await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: process.env.TWILIO_PHONE,
        to: formattedPhone,
      });
    } else {
      console.log(`Registration OTP for ${formattedPhone}: ${otp}`);
    }

    res.json({ message: "Registration OTP sent" });
  } catch (error) {
    console.error("Error in register:", error.message, error.stack);
    res.status(500).json({ message: error.message || "Server error" });
  }
});

// ===== Get current user =====
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("_id phone");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (error) {
    console.error("Error in /me:", error.message, error.stack);
    res.status(500).json({ message: error.message || "Server error" });
  }
});

module.exports = router;
