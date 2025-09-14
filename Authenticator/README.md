# Banking App

## Project Description
This is a MERN stack Banking App that provides OTP-based authentication using phone numbers. The backend is built with Express.js and MongoDB, while the frontend is a React application built with Vite. Users can register, login using OTP sent via SMS (using Twilio), and access a simple dashboard.

## Features
- User registration with phone number
- OTP generation and verification for authentication
- JWT-based session management
- Basic user dashboard displaying phone and balance
- Secure backend API with protected routes

## Tech Stack
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Twilio
- Frontend: React, Vite, Axios
- Other: dotenv for environment variables, CORS, body-parser

## Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)
- Twilio account for sending OTP SMS (optional, logs OTP if not configured)

## Installation

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   TWILIO_SID=your_twilio_account_sid (optional)
   TWILIO_AUTH_TOKEN=your_twilio_auth_token (optional)
   TWILIO_PHONE=your_twilio_phone_number (optional)
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Backend
From the `backend` directory, start the server:
```bash
npm run dev
```
The backend server will run on `http://localhost:5000`.

### Frontend
From the `frontend` directory, start the development server:
```bash
npm run dev
```
The frontend will be available at `http://localhost:3000` (or the port Vite assigns).

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /send-otp` - Send OTP to a phone number
- `POST /verify-otp` - Verify OTP and receive JWT token
- `POST /register` - Register a new user and send OTP
- `GET /me` - Get current user info (requires JWT token)

## Usage
- Register or login using your phone number.
- Receive OTP via SMS (or console log if Twilio not configured).
- Verify OTP to authenticate and access the dashboard.
- Dashboard displays user phone and balance (default balance management can be extended).

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is licensed under the ISC License.
