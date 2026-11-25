import express from "express"
import {  } from "../controllers/courseController.js"

const courseRouter = express.Router()

courseRouter.route(`/`)
    .post()
    .get()

courseRouter.route(`/:id`)
    .get()
    .put()
    .delete()

export default courseRouter