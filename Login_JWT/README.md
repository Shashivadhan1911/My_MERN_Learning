# JWT Authentication App

## Description

A full-stack web application for user authentication using JSON Web Tokens (JWT). The backend is built with Node.js and Express, using MongoDB for data storage. The frontend is a React application built with Vite.

## Features

- User registration with password hashing
- User login with JWT token generation
- Protected routes (welcome page after login)
- Role-based user management
- Responsive UI

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

### Frontend
- React
- Vite (build tool)
- Axios for HTTP requests
- React Router for navigation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd JWT
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Fill in the required values:
     - `MONGODB_URL`: Your MongoDB connection string
     - `JWT_SECRET`: A secret key for JWT signing
     - `PORT`: Port for the backend server (default 5000)

5. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

6. Start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173` (or the port shown by Vite).

## Usage

1. Register a new account on the registration page.
2. Login with your credentials.
3. Upon successful login, you'll be redirected to the welcome page displaying your user information.

## API Endpoints

### Backend API (running on port 5000)

- `GET /` - Check if server is running
- `GET /users` - Get all users (no auth required in this example)
- `POST /register` - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string", "role": "string" }`
- `POST /login` - Login user
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "jwt-token", "user": { "name": "string", "email": "string", "role": "string" } }`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
