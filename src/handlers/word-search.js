import WordSearch from "../lib/word-search/index.js"

/**
 * Handle get word search level request.
 */

export const getLevel = (req, res) => {
    const { level } = req.params

    const { size, squares, insertedWords } = new WordSearch(level)

    res.send({
        size,
        squares,
        insertedWords,
    })
}
