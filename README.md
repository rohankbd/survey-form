# Survey Form Application Setup Guide

This README provides the necessary steps to set up and run the survey form application on your local development environment. It includes instructions for both the backend (Node.js/Express) and frontend (React) components.

## Prerequisites

Before you start, make sure you have the following installed on your system:
- Node.js (version 14 or higher)
- npm (comes bundled with Node.js)
- MongoDB (version 4.0 or higher)

## Backend Setup

Follow these steps to set up the backend server:

```bash
# Clone the Backend Repository
git clone https://github.com/rohankbd/survey-form.git
cd backend

# Install Dependencies
npm install

# Set Up Environment Variables (this is already setup with the code; make changes if necessary)
echo "PORT=5000
MONGO_URI=mongodb://localhost:27017/surveydb
JWT_SECRET=<your_jwt_secret>" > .env

# Seed the Database
npm run seed

# Start the Server
nodemon index.js
```
The server will start running on http://localhost:5000.

## Frontend Setup

Follow these steps to set up the frontend client:

```bash
cd .. (if you are in ./backend)

# Install Dependencies
npm install

# Set Up Environment Variables (this is already setup with the code; make changes if necessary)
echo "REACT_APP_API_URL=http://localhost:5000" > .env

# Start the Development Server
npm start
```

The application will open in your browser at http://localhost:3000.

### Routes
/ -> Survey Form

/admin-login -> Admin Login page

/admin -> View Surveys (Admin only)

### Endpoints
/survey - POST, GET

/login - POST

/surveys - GET

## Additional Notes
### Design Decisions
 Backend Structure: Adopted the MVC architecture for clear separation of concerns.

 State Management: Utilized React's built-in state management to keep the application simple and manageable.

 Styling Approach: Employed CSS modules and Bootstrap to provide component-scoped styling and prevent style conflicts.

### Challenges Encountered
CORS Issues: Configuring CORS was initially challenging but was resolved by correctly setting up the CORS middleware in the backend.

Database Seeding: Creating an idempotent seeding process required careful scripting to avoid inserting duplicate data.

Deployment Preparation: Preparing the application for deployment involved setting environment variables and ensuring the frontend's production build is correctly served by the backend.

## Conclusion
By following the above instructions, you should be able to run the survey form application locally. If you run into any issues, please review the error messages in the console and ensure all prerequisites are properly installed and configured.