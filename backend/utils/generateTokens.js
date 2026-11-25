import jwt from "jsonwebtoken"

const generateAccessToken = (userId) => {
    const accessToken = jwt.sign(
        { "userId": userId },
        process.env.ACCESS_TOKEN,
        { expiresIn: "15m" }
    )

    return { accessToken }
}

const generateRefreshToken = (userId) => {
    const refreshToken = jwt.sign(
        { "userId": userId },
        process.env.REFRESH_TOKEN,
        { expiresIn: "30d" }
    )

    return { refreshToken }
}

export { generateAccessToken, generateRefreshToken }