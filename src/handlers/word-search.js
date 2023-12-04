import createWordSearchLevel from "../lib/word-search/index.js"
import { TIME_ALLOCATION } from "../lib/word-search/config.js"

/**
 * Handle get word search level request.
 */

export const getLevel = (req, res) => {
    const { level } = req.params

    const { size, squares, insertedWords } = createWordSearchLevel(level)

    res.send({
        size,
        squares,
        insertedWords,
        timeAllocation: TIME_ALLOCATION[level],
    })
}
