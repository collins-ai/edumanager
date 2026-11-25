import jwt from "jsonwebtoken"
import User from "../models/user.js"
import { generateAccessToken } from "../utils/generateTokens.js"

const refresh = async (req, res) => {
    const { refreshToken } = req.cookies
    if (!refreshToken) return res.status(401).json({ message: `not authorized`})

    const existingUser = await User.findOne({ refreshToken })
    if (!existingUser) return res.status(403).json({ message: `authorization error!`})

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        (err, decoded) => {
            if (err || existingUser._id.toString() !== decoded.userId) return res.status(403).json({ message: `forbidden`})

            const { accessToken } = generateAccessToken(decoded.userId)
            res.status(200).json({ token: accessToken })
        }
    )
}

export default refresh