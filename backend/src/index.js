import express from "express"
import authRoutes from "./routes/auth.route.js"

const port = 5001

const app = express()

app.use('/api/auth', authRoutes)

app.listen(port,()=>{
    console.log(`server started listening on port ${port}!`)
})