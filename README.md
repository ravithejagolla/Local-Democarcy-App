# loac-Democarcy-App 🗳️

**loac-Democarcy-App** is a full-stack civic engagement platform built to empower citizens to raise issues, vote on them, and track their resolution status. It helps improve transparency and communication between the public and local authorities.

## 🚀 Features

- 📝 Post civic issues with images/videos
- 👍 Upvote or 👎 downvote issues
- 🔄 Filter issues as Resolved / Unresolved
- 📊 Track voting trends and status
- 📩 Email or push notifications for updates *(optional)*
- 🔒 Secure login and role-based access (Admin/User)
- 📁 Media file upload with Multer

---

## 🧱 Tech Stack

### Frontend
- HTML, CSS, JavaScript (ES6+)
- React.js *(Optional enhancement)*
- Toast notifications and modals for user interactions

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT Authentication and role-based authorization
- Multer for file uploads

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravithejagolla/Local-Democarcy-App.git
   cd loac-Democarcy-App
loac-Democarcy-App/
├── client/                 # Frontend (ES6 or React)
├── server/                 # Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── utils/
├── uploads/                # Uploaded media
├── .env
├── package.json
└── README.md
