import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { server, app } from "./lib/socket.js"
// path is a built-in Node.js module.
import path from "path"

dotenv.config()
const port = process.env.port
// get the absolute path of the current directory
const __dirname = path.resolve() 

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ limit: "5mb", extended: true }))
app.use(cookieParser())


// This ensures that the frontend (on a different origin like 5173) can call your Express routes.
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
    // It tells the CORS middleware (Cross-Origin Resource Sharing) to allow the client to send cookies, authorization headers, or TLS certificates
}))

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

if (process.env.NODE_ENV === "production") {
    // Serve static files from the React frontend app (for the hosting server to the frontend)
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req, res) => {
        // This line is telling your Express server to send the built frontend page (index.html) to the client when a request doesn't match any backend route
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

server.listen(port, () => {
    console.log(`server started listening on port ${port}!`)
    connectDB()
})