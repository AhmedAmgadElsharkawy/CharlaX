import jwt from "jsonwebtoken"

const generateAccessToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_ACCESS_TOKEN_SECRET,{
        expiresIn: "1m"
    });

    res.cookie("accessToken", token, {
        maxAge: 1 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}


const generateRefreshToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_REFRESH_TOKEN_SECRET,{
        expiresIn: "7d"
    });

    res.cookie("refreshToken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}

export {generateAccessToken , generateRefreshToken}