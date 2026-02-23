# Password Reset Flow Frontend

A React.js frontend application for handling password reset workflows. This app allows users to request a password reset link via email, verify the reset token, and update their password securely. The frontend integrates with a backend API for email verification and password updates.

## 1. Table of Contents

Introduction

Features

Technologies

Project Structure

Installation

Environment Variables

Pages and Components

API Integration

Routing

Usage

License

## 2. Introduction

This frontend system implements a secure password reset flow, including:

Requesting a password reset link via email

Verifying the token validity before allowing password reset

Updating password securely after token validation

Providing loading, success, and error states for user interaction

It integrates with a backend API to handle token creation, validation, and password update operations.

## 3. Features

Request password reset via email

Verify reset token before allowing password change

Update password securely

Show success and error messages

Responsive UI using Bootstrap

## 4. Technologies

React.js – Frontend framework

React Router DOM – Client-side routing

Axios – HTTP client for API calls

Bootstrap – Responsive UI components

React Hooks – State and side-effect management

## 5. Project Structure

password-reset-flow-frontend/

│

├─ src/

│   ├─ pages/

│   │   ├─ ForgotPassword.jsx

│   │   └─ ResetPassword.jsx

│   │

│   ├─ services/

│   │   └─ api.js

│   │

│   ├─ App.jsx

│   └─ index.js

│

├─ public/

├─ package.json

└─ README.md

## 6. Installation

Clone the repository:

git clone <repository-url>

cd password-reset-flow-frontend

Install dependencies:

npm install

Start the development server:

npm start

The frontend will run at http://localhost:5173

 (or the port specified by your environment).

## 7. Environment Variables

If needed, create a .env file in the project root:

REACT_APP_API_BASE_URL=http://localhost:5000/api/auth

Note: The frontend uses Axios to call the backend API. Adjust the base URL according to your backend deployment.

## 8. Pages and Components

### 8.1 ForgotPassword.jsx

Allows users to submit their email to receive a reset link.

Handles loading, success, and error states.

Uses Axios to call the /forgot-password API endpoint.

### 8.2 ResetPassword.jsx

Extracts the reset token from URL parameters.

Verifies token validity with the backend.

Provides a form to update the password.

Displays success or error messages.

## 9. API Integration

All API calls are handled via Axios in services/api.js:

import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/auth"
});

Endpoints used:

POST /forgot-password – Request reset link

GET /reset-password/:token – Verify token validity

POST /reset-password/:token – Reset password

## 10. Routing

Routing is implemented with React Router DOM in App.jsx:

/ – Home page with link to Forgot Password

/forgot-password – Forgot Password page

/reset-password/:token – Reset Password page with token parameter

The Navbar component provides navigation between pages.

## 11. Usage

Open the frontend in a browser (http://localhost:5173
).

Click “Reset Password” on the home page.

Enter your email to receive a reset link.

Open the link received via email to access the Reset Password page.

Enter a new password and submit to complete the reset flow.

## 12. License

This project is licensed under the MIT License.

## Author

Kanesha K

Software Engineer
