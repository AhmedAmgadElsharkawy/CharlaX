import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import {server, app} from "./lib/socket.js"

dotenv.config()
const port = process.env.port

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

server.listen(port, () => {
    console.log(`server started listening on port ${port}!`)
    connectDB()
})