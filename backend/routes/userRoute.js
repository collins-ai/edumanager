import express from "express"
import validateInput from "../middlewares/validateInput.js"
import { loginSchema, signupSchema } from "../validators/userValidator.js"
import { signUp, logIn, logOut } from "../controllers/userController.js"

const router = express.Router()
router.post(`/signup`, validateInput(signupSchema), signUp)
router.post(`/login`, validateInput(loginSchema), logIn)
router.post(`/logout`, logOut)

export default router