import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MmongoDB is connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection error" , error)
    }
}