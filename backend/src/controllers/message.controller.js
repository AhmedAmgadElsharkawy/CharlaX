import User from "../models/user.model.js"
import Message from "../models/message.model.js"

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedUserId = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-select")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or: [
                { senderId: myId, recieverId: userToChatId },
                { senderId: userToChatId, recieverId: myId }
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}