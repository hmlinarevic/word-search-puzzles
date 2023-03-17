import { Router } from "express"
import { getWordSearchLevel } from "./puzzle.controller.js"

const router = new Router()

router.get("/level/:level", getWordSearchLevel)

export default router
