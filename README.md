# Entry-Level-Fullstack-Test

A simple fullstack application with Node.js/Express backend and React frontend.

## Project Structure

```
├── backend/                # Node.js + Express backend
│   ├── config/             # Database configuration
│   │   └── config.js       # Sequelize database config
│   ├── controllers/        # Route controllers
│   │   ├── auth.controller.js   # Authentication endpoints
│   │   └── users.controller.js  # User endpoints
│   ├── migrations/         # Database migrations
│   ├── models/             # Sequelize models
│   │   ├── index.js        # Models index
│   │   └── user.js         # User model
│   ├── services/           # Business logic layer
│   │   ├── auth.service.js      # Authentication service
│   │   └── users.service.js     # User service
│   ├── .env.example        # Environment variables template
│   ├── .sequelizerc        # Sequelize CLI configuration
│   ├── index.js            # Main server file
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── src/                # React source files
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database server

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your database credentials and JWT secret:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=mydatabase
   DB_USER=myuser
   DB_PASSWORD=mypassword
   PORT=3001
   JWT_SECRET=your-secret-key-here
   ```

5. Create the database using Sequelize CLI:
   ```bash
   npx sequelize-cli db:create
   ```

6. Run migrations to create the database tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

7. Start the server:
   ```bash
   npm start
   ```

The backend server will run on `http://localhost:3001`

Available endpoints:
- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint
- `GET /users` - Get all users
- `POST /auth/login` - Generate JWT token (returns token with fixed userId: -1)

For more information about Sequelize and migrations, visit the [Sequelize documentation](https://sequelize.org/docs/v6/)

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
- PostgreSQL
- Sequelize ORM
- JSON Web Tokens (JWT)
- dotenv

### Frontend
- React
- Create React App
- React Hook Form - [Documentation](https://react-hook-form.com/)
- Material-UI (MUI)

## Frontend Development Patterns

### Form Handling
This project uses **React Hook Form** with the `Controller` component pattern for form inputs. This pattern is preferred for better integration with Material-UI components and controlled form state management.

Example:
```jsx
import { useForm, Controller } from 'react-hook-form';

const { control, handleSubmit } = useForm();

<Controller
  name="email"
  control={control}
  rules={{ required: 'Email is required' }}
  render={({ field }) => (
    <TextField {...field} label="Email" />
  )}
/>
```

For more information, visit the [React Hook Form documentation](https://react-hook-form.com/).

### Routing
Application routes are defined in a centralized `routes.js` file as an enum for consistency and maintainability.

## Development

- Backend runs on port 3001 by default
- Frontend runs on port 3000 by default
- Both applications need to be running simultaneously for full functionality

## Database Management

### Using Sequelize CLI

The project uses Sequelize CLI for database management. Here are some useful commands:

- **Create database**: `npx sequelize-cli db:create`
- **Run migrations**: `npx sequelize-cli db:migrate`
- **Undo last migration**: `npx sequelize-cli db:migrate:undo`
- **Undo all migrations**: `npx sequelize-cli db:migrate:undo:all`
- **Create a new migration**: `npx sequelize-cli migration:generate --name migration-name`

Learn more about Sequelize at [https://sequelize.org/docs/v6/](https://sequelize.org/docs/v6/)