import express from "express"
import bp from "body-parser"
import morgan from "morgan"

import * as config from "./config/index.js"

import puzzleRouter from "./resources/puzzle/puzzle.router.js"

const app = express()

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(morgan("dev"))

app.use("/api/puzzle", puzzleRouter)

app.get("/", (req, res) => {
    res.json({ message: "hello there" })
})

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`)
})
