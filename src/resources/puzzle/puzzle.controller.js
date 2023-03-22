import createWordSearchLevel from "../../lib/wordSearch/index.js"
import { TIME_ALLOCATION } from "../../lib/wordSearch/config.js"

export const getWordSearchLevel = (req, res) => {
    const { level } = req.params

    const isValidReq = level && level >= 0 && level <= 10

    if (isValidReq) {
        const { size, squares, insertedWords } = createWordSearchLevel(level)

        res.set("Access-Control-Allow-Origin", "http://localhost:5000")

        res.send({
            size,
            squares,
            insertedWords,
            timeAllocation: {
                memorize: TIME_ALLOCATION[req.params.level].memorize,
                game: TIME_ALLOCATION[req.params.level].game,
            },
        })
    } else {
        res.send({ message: "invalid request" })
    }
}
