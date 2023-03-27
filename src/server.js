/**
 * Module dependencies.
 */

import express from "express"
import morgan from "morgan"
import cors from "cors"
import * as config from "./config/index.js"
import router from "./router.js"

/**
 * Server.
 */

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.get("/", (req, res) => {
    res.json({ message: "hello there" })
})

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`)
})
