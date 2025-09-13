# 📸 Webcam Image Upload

A full-stack web application that allows users to capture images using their webcam and store them in a MongoDB database.

## ✨ Features

- **Real-time webcam capture** - Take photos directly from your browser
- **Image storage** - Upload and store images in MongoDB
- **Gallery view** - Browse all captured images with metadata
- **Responsive design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- react-webcam

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS middleware

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Modern web browser with webcam support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/webcam-upload.git
   cd webcam-upload
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/webcam-app
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/webcam-app
```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend (in a new terminal)**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Allow webcam permissions when prompted

## 📁 Project Structure

```
webcam-upload/
├── backend/
│   ├── models/
│   │   └── image.js          # MongoDB schema
│   ├── server.js             # Express server
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/upload` | Upload a captured image |
| `GET` | `/images` | Get all image metadata |
| `GET` | `/images/data` | Get all images with full data |

## 🔧 Development

### Backend Scripts
```bash
npm run dev    # Start with nodemon
npm start      # Production start
```

### Frontend Scripts
```bash
npm run dev    # Development server
npm run build  # Production build
npm run preview # Preview production build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## ⚠️ Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

Webcam functionality requires HTTPS in production environments.

---

**Made with ❤️ using React and Node.js**
