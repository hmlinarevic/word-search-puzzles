/**
 * Module dependencies.
 */

import { Router } from "express"
import { validateLevel } from "./middlewares/validateLevel.js"
import { getLevel } from "./handlers/word-search.js"

/**
 * Router.
 */

const router = Router()

/**
 * Word Search.
 */

router.get("/wordsearch/level/:level", validateLevel, getLevel)

/**
 * Export.
 */

export default router
