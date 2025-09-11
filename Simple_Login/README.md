# 🔐 MERN Authentication System

A modern, full-stack authentication application built with the MERN stack that provides secure user registration and login functionality with a sleek, responsive interface.

![Login Screen](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react&logoColor=white)
![Backend](https://img.shields.io/badge/Backend-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Build Tool](https://img.shields.io/badge/Build-Vite-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- 🔑 **Secure User Authentication** - Register and login with email/password
- 🎨 **Modern UI Design** - Clean, dark-themed interface with blue accent colors
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Form Validation** - Client-side validation with user-friendly error messages
- 🔄 **Password Confirmation** - Ensures password accuracy during registration
- 🚪 **Protected Routes** - Welcome page accessible only after authentication
- 🌐 **RESTful API** - Well-structured backend with clear endpoints
- 📊 **Real-time Feedback** - Instant feedback for user actions (login/register)

## 🖼️ Screenshots

### Login Interface
Clean and intuitive login form with easy navigation to registration.

### Registration Form  
Comprehensive registration with password confirmation and duplicate user detection.

### Welcome Dashboard
Success page displayed after successful authentication.

### API Response
JSON API responses showing user data structure.

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI Framework |
| **Vite** | Latest | Build Tool & Dev Server |
| **React Router DOM** | Latest | Client-side Routing |
| **Axios** | Latest | HTTP Client |
| **CSS3** | - | Styling & Responsive Design |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 14+ | Runtime Environment |
| **Express.js** | 5.1.0 | Web Application Framework |
| **MongoDB** | Latest | NoSQL Database |
| **Mongoose** | Latest | MongoDB Object Modeling |
| **CORS** | Latest | Cross-Origin Resource Sharing |
| **dotenv** | Latest | Environment Variables |

## 📋 Prerequisites

Ensure you have the following installed on your system:

- ✅ **Node.js** (version 14.0 or higher)
- ✅ **MongoDB** (local installation or MongoDB Atlas account)
- ✅ **npm** or **yarn** package manager
- ✅ **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd MERN/login
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URL=mongodb://localhost/mern-auth
# For MongoDB Atlas, use your connection string
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Launch the Application

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
🚀 Backend running on `http://localhost:5000`

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```
🚀 Frontend running on `http://localhost:5173`

### 5. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 🌐 API Documentation

| Endpoint | Method | Description | Request Body |
|----------|--------|-------------|--------------|
| `/` | GET | Health check & MongoDB connection test | - |
| `/register` | POST | Register a new user | `{ "email": "user@example.com", "password": "password123" }` |
| `/login` | POST | Authenticate user login | `{ "email": "user@example.com", "password": "password123" }` |
| `/users` | GET | Retrieve all users (development) | - |
| `/users` | POST | Create user (alternative endpoint) | `{ "email": "user@example.com", "password": "password123" }` |

### Example API Response
```json
{
  "_id": "68c270a164126cd734310754",
  "email": "test@example.com",
  "password": "testpass",
  "__v": 0
}
```

## 📁 Project Structure

```
MERN/login/
├── 📁 backend/
│   ├── 📁 model/
│   │   └── 📄 user.js              # Mongoose User Schema
│   ├── 📄 package.json             # Backend Dependencies
│   ├── 📄 server.js                # Express Server & Routes
│   └── 📄 .env                     # Environment Variables
├── 📁 frontend/
│   ├── 📁 public/                  # Static Assets
│   ├── 📁 src/
│   │   ├── 📁 assets/              # Images, Icons, etc.
│   │   ├── 📄 App.jsx              # Main Component with Routing
│   │   ├── 📄 Login.jsx            # Authentication Forms
│   │   ├── 📄 Welcome.jsx          # Protected Welcome Page
│   │   ├── 📄 main.jsx             # React Entry Point
│   │   └── 📄 index.css            # Global Styles
│   ├── 📄 package.json             # Frontend Dependencies
│   └── 📄 vite.config.js           # Vite Configuration
└── 📄 README.md                    # Project Documentation
```

## 🎯 Usage Guide

1. **Registration**: Click "Need to register?" and fill out the form
2. **Login**: Use your registered credentials to log in
3. **Navigation**: Seamlessly switch between login and registration
4. **Success**: Access the welcome page after successful authentication

## 🔒 Security Considerations

⚠️ **Important Security Notes:**
- This is a basic authentication system for learning purposes
- Passwords are currently stored in plain text (not recommended for production)
- No session management or JWT tokens implemented yet

## 🚀 Future Enhancements

- [ ] **Password Hashing** with bcrypt for secure password storage
- [ ] **JWT Authentication** for stateless session management
- [ ] **Password Reset** functionality via email
- [ ] **Email Verification** for new user accounts
- [ ] **User Profile Management** with avatar uploads
- [ ] **Role-Based Access Control** (Admin/User roles)
- [ ] **Rate Limiting** to prevent brute force attacks
- [ ] **OAuth Integration** (Google, GitHub, Facebook)
- [ ] **Remember Me** functionality
- [ ] **Two-Factor Authentication** (2FA)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

## 📝 Development Scripts

### Backend Scripts
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend Scripts  
```bash
npm run dev    # Start Vite development server
npm run build  # Build for production
npm run preview # Preview production build
```

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Issues:**
- Ensure MongoDB is running locally or check your Atlas connection string
- Verify the database URL in your `.env` file

**Port Conflicts:**
- Backend runs on port 5000, frontend on 5173
- Change ports in respective configuration files if needed

**CORS Errors:**
- Ensure CORS is properly configured in the backend
- Check that frontend is making requests to the correct backend URL

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for learning full-stack development with the MERN stack.

---

⭐ **Star this repository if you found it helpful!**