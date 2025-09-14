# Authenticator

A secure MERN stack banking application with OTP-based authentication using phone numbers.

## ✨ Features

- 📱 Phone number registration & login
- 🔐 OTP verification via SMS (Twilio)
- 🎫 JWT-based authentication
- 💰 User dashboard with balance display
- 🛡️ Protected API routes
- 📊 Transaction history (future enhancement)

## 🛠️ Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Twilio SMS API
- Rate limiting & Security

**Frontend:**
- React 18
- Vite
- Axios
- Tailwind CSS
- React Router

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB
- Twilio account (optional - will log OTP to console if not configured)

### Installation

1. **Clone the repository**
   ```bash
   git clone
   cd banking-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env` file:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/bankingapp
   JWT_SECRET=your_super_secret_jwt_key
   TWILIO_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE=your_twilio_phone
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Run the Application**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## 📱 Usage

1. Open `http://localhost:3000`
2. Register with your phone number
3. Enter OTP received via SMS
4. Access your dashboard

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/send-otp` | Send OTP to phone |
| POST | `/api/auth/verify-otp` | Verify OTP & login |
| GET | `/api/auth/me` | Get user profile |


## 🔒 Security Features

- Rate limiting on API endpoints
- OTP expiration (5 minutes)
- JWT token authentication
- Phone number validation
- Secure password hashing for OTP

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙋‍♂️ Support

If you have any questions or need help, feel free to open an issue or contact me.

---

⭐ **Star this repo if you found it helpful!**

