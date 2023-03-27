import WordSearch from "../lib/word-search/index.js"

/**
 * Handle get word search level request.
 */

export const getLevel = (req, res) => {
    const { level } = req.params

    const ws = new WordSearch(level)

    res.send({
        size: ws.getSize(),
        squares: ws.getSquares(),
        insertedWords: ws.getInsertedWords(),
        timeAllocation: ws.getTimeAllocation(),
    })
}
