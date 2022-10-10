import createCrosswordLevel from '../../modules/crossword/index.js'
import { TIME_ALLOCATION } from '../../modules/crossword/config.js'

export const getLevel = (req, res) => {
  const { level } = req.params

  const isValidReq = level && level >= 0 && level <= 10

  if (isValidReq) {
    const { size, squares, insertedWords } = createCrosswordLevel(level)

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')

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
    res.send({ message: 'invalid request' })
  }
}
