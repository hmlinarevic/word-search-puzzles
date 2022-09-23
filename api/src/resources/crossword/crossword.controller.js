import createCrosswordLevel from '../../modules/crossword/index.js'
import { TIME_PER_LEVEL } from '../../modules/crossword/config.js'

export const getLevel = (req, res) => {
  const isValidReq =
    req.params.level && req.params.level >= 0 && req.params.level <= 10

  if (isValidReq) {
    res.send({
      level: createCrosswordLevel(req.params.level),
      time: TIME_PER_LEVEL[req.params.level],
    })
  } else {
    res.send({ message: 'invalid request' })
  }
}
