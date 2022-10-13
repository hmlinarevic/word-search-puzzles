import Crossword from './components/Crossword.js'

const createCrosswordLevel = (levelNum) => {
  const c = new Crossword(levelNum)

  const level = {
    size: c.getSize(),
    squares: c.getSquares(),
    insertedWords: c.getInsertedWords(),
  }

  return level
}

export default createCrosswordLevel
