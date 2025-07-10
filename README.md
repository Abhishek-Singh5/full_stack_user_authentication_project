# Authentication System with Email OTP Verification

A powerful and secure **Full-Stack Authentication System** built using the **MERN (MongoDB, Express.js, React, Node.js)** stack. This project features complete user authentication with **OTP-based email verification**, **JWT-based session management**, and **password reset functionality**. Email services are powered by **Brevo SMTP (port 587 with TLS/STARTTLS)**.

Developed a secure MERN stack authentication system with **OTP-based email verification** using Brevo SMTP (TLS, Port 587), supporting user registration, login, and password reset workflows.

Implemented **JWT-based session management** and protected API routes using Express middleware and HttpOnly cookies for enhanced security and user state management.

Engineered dynamic OTP generation and expiry logic with 24-hour validity, **integrated with Nodemailer and MongoDB Atlas** for persistent and scalable storage.

Applied **bcrypt hashing** for password security and created RESTful APIs for user management, authentication state checks, and secure logout with cookie clearing.

Built a responsive React frontend with **Tailwind CSS and React Context API**, featuring real-time validations, route protection, toast notifications, and global auth state handling.

---

## ✨ Key Features

- 📅 **User Registration with Email OTP Verification**
- 📧 Email OTP delivery via **Brevo (Sendinblue) SMTP Server**
- ⏰ **OTP Expiration Handling** (expires in 24 hours)
- 🔐 **Secure Password Hashing using bcrypt**
- 🔑 **Authentication using JWT Tokens (stored in HttpOnly Cookies)**
- 🛡️ **Protected Routes with Middleware Authorization**
- ↺ **Password Reset via OTP & Email**
- 🌐 MongoDB Atlas integration for cloud storage
- 📉 Global state management using React Context API
- ✨ Stylish UI with **Tailwind CSS**

---

## 📂 Project Structure

```
mern-auth-system/
|
|— client/          # React Frontend
|   |
|   — src/
|       — pages/      # Login, Register, EmailVerify, ResetPassword
|       — context/    # AppContext for Global State
|       — assets/     # Icons, logos, etc.
|       — App.jsx
|
|— server/          # Express Backend
|   |
|   — controllers/   # authController.js, userController.js
|   — middleware/    # userAuth.js
|   — models/        # userModel.js
|   — routes/        # authRoutes.js, userRoutes.js
|   — utils/         # emailSender.js (SMTP Integration)
|   — server.js
|
|— .env             # Environment Variables
|— README.md
```

---

## 🔧 Technology Stack

### Backend

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ODM
- JWT (jsonwebtoken)
- bcrypt.js (Password hashing)
- cookie-parser
- dotenv
- nodemailer (SMTP support for Brevo)

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- React Toastify (notifications)
- Axios

---

## 🎮 API Documentation

### Auth Routes (/api/auth)

| METHOD | ENDPOINT         | DESCRIPTION                       |
| ------ | ---------------- | --------------------------------- |
| POST   | /register        | Register new user                 |
| POST   | /login           | Authenticate user and set JWT     |
| POST   | /logout          | Logout user, clear token cookie   |
| POST   | /send-verify-otp | Send OTP to user's email          |
| POST   | /send-reset-otp  | Send reset password OTP via email |
| POST   | /reset-password  | Verify OTP & update password      |

### User Routes (/api/user)

| METHOD | ENDPOINT | DESCRIPTION                 |
| ------ | -------- | --------------------------- |
| GET    | /is-auth | Check authentication status |
| GET    | /data    | Fetch logged-in user data   |

---

## 📁 MongoDB User Schema

```javascript
{
  name: String,
  email: String,
  password: String, // hashed using bcrypt
  isAccountVerified: { type: Boolean, default: false },
  verifyOtp: String,
  verifyOtpExpireAt: Date
}
```

---

## 🌎 Environment Variables (.env)

```env
PORT=4000
MONGO_URI=<MongoDB Atlas URI>
JWT_SECRET=<JWT Secret Key>
SENDER_EMAIL=<Brevo SMTP Email>
SENDER_PASSWORD=<Brevo App Password>
CLIENT_URL=http://localhost:5173
```

---

## 👀 Email & OTP Setup

- Provider: **Brevo (Sendinblue)**
- SMTP Host: `smtp-relay.brevo.com`
- Port: `587`
- Encryption: `STARTTLS`
- Integration via `nodemailer`

---

## ⚡ OTP Workflow

1. When user registers, OTP is generated (6-digit).
2. Sent via Brevo SMTP to the user email.
3. OTP stored in DB along with expiry (24 hours).
4. Verification checks OTP and marks `isAccountVerified = true`.
5. Same flow reused for password resets.

---

## 📖 Usage Instructions

### ✅ Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Brevo SMTP account

### 🔄 Run the Project

```bash
# Clone Repo
[https://github.com/Abhishek-Singh5/full_stack_user_authentication_project.git]

# Backend Setup
cd server
npm install
npm run server

# Frontend Setup
cd ../client
npm install
npm run dev
```

### ⚖️ Testing the Flow

- Register using valid email
- Receive OTP (check email inbox)
- Verify OTP on frontend
- Logout, Reset password, Login again

---

## 🚀 Future Improvements

- Email Templates
- OTP Retry Limit / Cooldown
- Account Lock after X failed logins
- Google / GitHub OAuth

---

## 💬 Support

- Raise an Issue on GitHub
- Contact: [singhabhishek4686@gmail.com](mailto\:your.email@example.com)

---

## 💚 License

Licensed under the [MIT License](LICENSE)

---

> Made with MERN & ❤️

