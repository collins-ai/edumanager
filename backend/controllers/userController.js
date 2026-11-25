import bcrypt from "bcrypt"
import User from "../models/user.js"
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js"

const signUp = async (req, res) => {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(409).json({ message: `email already used!`})

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        name, email, password: hashedPassword
    })

    const { accessToken } = generateAccessToken(newUser._id)
    const { refreshToken } = generateRefreshToken(newUser._id)
    newUser.refreshToken = refreshToken
    await newUser.save()

    res.cookie(`refreshToken`, refreshToken, { httpOnly: true, secure: true, sameSite: `None`, maxAge: 24 * 60 * 60 * 1000 })
    res.status(201).json({
        message: `sign up successful!`,
        token: accessToken
    })
}

const logIn = async (req, res) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) return res.status(401).json({ message: `email not found!`})

    const verifiedUser = await bcrypt.compare(password, existingUser.password)
    if (verifiedUser) {
        const { accessToken } = generateAccessToken(existingUser._id)
        const { refreshToken } = generateRefreshToken(existingUser._id)
        existingUser.refreshToken = refreshToken
        await existingUser.save()

        res.cookie(`refreshToken`, refreshToken, { httpOnly: true, secure: true, sameSite: `None`, maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).json({
            message: `log in successful!`,
            token: accessToken
        })
    } else {
        res.status(401).json({ message: `incorrect password!` })
    }
}

const logOut = async (req, res) => {
    const { refreshToken } = req.cookies
    if (!refreshToken) return res.sendStatus(204)

    const existingUser = await User.findOne({ refreshToken })
    if (!existingUser) {
        res.clearCookie(`refreshToken`, { httpOnly: true, secure: true, sameSite: `None` })
        return res.sendStatus(204)
    }

    existingUser.refreshToken = ``
    await existingUser.save()

    res.clearCookie(`refreshToken`, { httpOnly: true, secure: true, sameSite: `None` })
    res.status(200).json({ message: `log out successful!` })
}

export { signUp, logIn, logOut }