import express from "express"
import validateInput from "../middlewares/validateInput.js"
import studentSchema from "../validators/studentValidator.js"
import {  } from "../controllers/studentController.js"

const studentRouter = express.Router()

studentRouter.route(`/`)
    .post(validateInput(productSchema), )
    .get()

studentRouter.route(`/:id`)
    .get()
    .put()
    .delete()

export default studentRouter