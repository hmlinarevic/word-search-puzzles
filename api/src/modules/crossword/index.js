import Crossword from './components/Crossword.js'

const createCrosswordLevel = (levelNum) => {
  const c = new Crossword(levelNum)

  return {
    size: c.getSize(),
    squares: c.getSquares(),
    insertedWords: c.getInsertedWords(),
  }
}

const level = createCrosswordLevel(3)
console.log(level)

export default createCrosswordLevel
