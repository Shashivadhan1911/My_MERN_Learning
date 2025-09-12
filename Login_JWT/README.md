# JWT Authentication App 🔐

A modern, full-stack web application featuring secure user authentication with JSON Web Tokens (JWT). Built with a sleek dark theme UI and robust backend architecture.

![Login Screen](./screenshots/login.png)
*Modern login interface with neon-styled design*

## ✨ Features

- **🔒 Secure Authentication**: JWT-based login system with password hashing
- **📝 User Registration**: Complete user registration with role assignment
- **🎨 Modern UI**: Dark theme with neon accents and smooth animations
- **👤 User Dashboard**: Welcome page displaying user information and role
- **🛡️ Protected Routes**: Role-based access control
- **📱 Responsive Design**: Works seamlessly across all devices
- **🔄 Real-time Feedback**: Instant validation and error handling

## 🖼️ Screenshots

| Login Page | Registration Page | Welcome Dashboard |
|------------|-------------------|-------------------|
| ![Login](./screenshots/login.png) | ![Register](./screenshots/register.png) | ![Welcome](./screenshots/welcome.png) |

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing and security
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - Frontend library
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing
- **Modern CSS** - Custom styling with animations and effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd JWT
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URL=mongodb://localhost:27017/jwt_auth
   JWT_SECRET=your_super_secret_jwt_key_here
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the Application**
   
   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📊 API Reference

### Authentication Endpoints

#### Register User
```http
POST /register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Login User
```http
POST /login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Get All Users
```http
GET /users
```

**Response:**
```json
[
  {
    "_id": "68c44b20eaf531522f7eb506",
    "name": "test",
    "email": "test@example.com",
    "role": "admin",
    "__v": 0
  }
]
```

## 🎯 Usage Guide

1. **Registration**: Navigate to the registration page and create a new account
2. **Login**: Use your credentials to log in
3. **Dashboard**: After successful authentication, access your personalized welcome page
4. **Role Management**: Different user roles (admin, user) provide different access levels

## 🏗️ Project Structure

```
JWT/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
└── README.md
```

## 🔧 Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Database Schema

**User Model:**
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: "user"),
  createdAt: Date (auto-generated)
}
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is configured
3. Deploy the backend folder

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Configure API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- JWT.io for JWT token handling
- MongoDB for database solutions
- React community for excellent documentation
- Vite for blazing-fast development experience

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Check the documentation
- Contact the development team

---

**Made with ❤️ using React, Node.js, and MongoDB**
