const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: {
    type: String, // base64 encoded image data
    required: true
  },
  contentType: {
    type: String,
    default: 'image/jpeg'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', imageSchema);
