# Entry-Level-Fullstack-Test

A simple fullstack application with Node.js/Express backend and React frontend.

## Project Structure

```
├── backend/          # Node.js + Express backend
│   ├── index.js      # Main server file
│   └── package.json  # Backend dependencies
├── frontend/         # React frontend
│   ├── src/          # React source files
│   ├── public/       # Public assets
│   └── package.json  # Frontend dependencies
└── README.md         # This file
```

## Getting Started

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The backend server will run on `http://localhost:3001`

Available endpoints:
- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The React app will run on `http://localhost:3000`

## Technologies Used

### Backend
- Node.js
- Express.js

### Frontend
- React
- Create React App

## Development

- Backend runs on port 3001 by default
- Frontend runs on port 3000 by default
- Both applications need to be running simultaneously for full functionality