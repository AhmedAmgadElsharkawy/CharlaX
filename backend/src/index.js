import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"

dotenv.config()
const port = process.env.port
const app = express()

app.use('/api/auth', authRoutes)

app.listen(port,()=>{
    console.log(`server started listening on port ${port}!`)
    connectDB()
})