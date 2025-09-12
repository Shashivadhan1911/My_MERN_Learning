# JWT Authentication App 🔐

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

> A sleek, modern authentication system with JWT tokens and a beautiful dark UI

## 🚀 Features

✅ **Secure Login & Registration**  
✅ **JWT Token Authentication**  
✅ **Dark Theme with Neon Effects**  
✅ **Role-Based Access Control**  
✅ **Responsive Design**  

## 📸 Preview

| Login | Register | Dashboard |
|-------|----------|-----------|
| ![Login](./screenshots/login.png) | ![Register](./screenshots/register.png) | ![Dashboard](./screenshots/welcome.png) |

## ⚡ Quick Start

**1. Clone & Install**
```bash
git clone <your-repo-url>
cd JWT

# Backend
cd backend && npm install

# Frontend  
cd ../frontend && npm install
```

**2. Environment Setup**
```bash
# backend/.env
MONGODB_URL=mongodb://localhost:27017/jwt_auth
JWT_SECRET=your_secret_key_here
PORT=5000
```

**3. Run the App**
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

**4. Open in Browser**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🛠️ Built With

**Backend**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT & bcryptjs

**Frontend**
- React & Vite
- Axios & React Router
- Custom CSS with animations

## 📡 API Endpoints

### POST `/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "password123",
  "role": "user"
}
```

### POST `/login`  
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET `/users`
Returns all registered users (for testing)

## 📁 Project Structure
```
JWT/
├── backend/           # Node.js API
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── server.js      # Entry point
└── frontend/          # React app
    ├── src/           # Source code
    └── public/        # Static files
```

## 🚀 Deployment

**Backend**: Deploy to Heroku, Railway, or Render  
**Frontend**: Deploy to Vercel or Netlify  
**Database**: Use MongoDB Atlas for production

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Open a Pull Request

---

⭐ **Star this repo if you found it helpful!**
