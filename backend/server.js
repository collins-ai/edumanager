import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/connectDB.js"
import corsOptions from "./config/corsOptions.js"
import verifyJWT from "./middlewares/verifyJWT.js"
import handleError from "./middlewares/handleError.js"
import userRouter from "./routes/userRoute.js"
import refreshRouter from "./routes/refreshRoute.js"
import studentRouter from "./routes/studentRoute.js"
import courseRouter from "./routes/courseRoute.js"
//import dns from "node:dns/promises"
//dns.setServers(["8.8.8.8", "1.1.1.1"])

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

//Middlewares
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(`/images`, express.static(`./uploads`))

// Public routes
app.use(`/product`, courseRouter)
app.use(`/user`, userRouter)
app.use(`/refresh`, refreshRouter)

//Protected routes
app.use(verifyJWT)
app.use(`/cart`, studentRouter)

//Error handler
app.use(handleError)

mongoose.connection.once(`open`, () => {
    console.log(`application connected to mongoDB`)
    app.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
})