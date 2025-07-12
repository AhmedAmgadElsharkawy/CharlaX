# CharlaX
CharlaX is a modern, real-time chat application built using the **MERN stack**, combining powerful technologies like **Tailwind CSS**, **DaisyUI**, **Zustand**, and **Socket.IO** to deliver a seamless messaging experience. It supports **instant text messaging** and **image sharing**, making it ideal for both casual and professional communication.

## Table of Contents
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Technology Stack](#technology-stack)
- [Features](#features)

## Demo
https://github.com/user-attachments/assets/73d24e35-d004-4485-aab6-3b6409ab33b4

## Prerequisites

- **Node.js**
- **MongoDB** 


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AhmedAmgadElsharkawy/CharlaX.git
   cd Charlax
   ```

2. **Set up the backend:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file inside the `backend` folder with:

   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   ```

3. **Set up the frontend:**

   ```bash
   cd frontend
   npm install
   ```

4. **Run the app locally:**

   - **Backend:**

     ```bash
     cd backend
     npm run dev
     ```

   - **Frontend:**

     ```bash
     cd frontend
     npm run dev
     ```

   - **Access the app:**

     Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Technology Stack

- **MERN Stack** (MongoDB, Express.js, React.js, Node.js)
- **Tailwind CSS** – Utility-first styling for fast and responsive UI
- **DaisyUI** – Prebuilt Tailwind components for beautiful design and themes
- **Zustand** – Lightweight state management library for React
- **Socket.IO** – Real-time bidirectional communication for instant messaging
- **JWT (JSON Web Tokens)** – Secure authentication and session management


## Features

- **Real-Time Chat**  
  Exchange messages and images instantly with Socket.IO-powered real-time communication.

- **Image Sharing**  
  Upload and preview images directly in chat, with smooth rendering and backend storage.

- **Global State with Zustand**  
  Simple, fast, and scalable state management for managing auth, chat state, and UI.

- **Responsive UI with Themes**  
  Built using Tailwind CSS and DaisyUI with full support for light/dark mode and mobile responsiveness.

- **Secure Authentication**  
  Sessions are protected using JWT tokens, enabling secure login and route protection.

- **Security Best Practices**  
  Backend and frontend are structured to reduce risk of CSRF and XSS attacks with proper token handling, and CORS.

- **Developer Friendly**  
  Modular structure, reusable hooks, and RESTful API endpoints for easy development and scaling.


## License

This project is open-source and available under the [MIT License](LICENSE).
