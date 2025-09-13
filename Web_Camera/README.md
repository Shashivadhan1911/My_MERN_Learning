# Web Camera Project

## Project Description
This project is a web camera application that allows users to capture images using their webcam and upload them to a backend server. The backend stores the images in a MongoDB database. Users can also view the uploaded images and their metadata.

## Technologies Used
- Backend: Node.js, Express, MongoDB, Mongoose, CORS, dotenv
- Frontend: React, Vite, react-webcam

## Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```
   PORT=your_port_number
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage
- Open the frontend application in your browser (usually at `http://localhost:3000`).
- Use the webcam interface to capture images.
- Captured images are uploaded to the backend server and stored in MongoDB.
- You can view the uploaded images and their metadata through the frontend interface.

## API Endpoints
- `POST /upload` - Upload an image to the server.
- `GET /images` - Retrieve metadata of all uploaded images.
- `GET /images/data` - Retrieve all uploaded images with their data.

## Folder Structure
```
/backend
  ├── models/
  │   └── image.js          # Mongoose schema for images
  ├── package.json          # Backend dependencies and scripts
  ├── server.js             # Express server and API endpoints
/frontend
  ├── public/               # Public assets
  ├── src/
  │   ├── components/       # React components including webcam interface
  │   ├── App.jsx           # Main React app component
  │   ├── main.jsx          # React entry point
  ├── package.json          # Frontend dependencies and scripts
  ├── vite.config.js        # Vite configuration
```

## License
This project is licensed under the ISC License.
