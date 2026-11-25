import express from "express"
import refresh from "../controllers/refreshController.js"

const router = express.Router()
router.post(`/`, refresh)

export default router