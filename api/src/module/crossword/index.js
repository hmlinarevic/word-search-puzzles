import crossword from './components/Crossword.js'

const createCrosswordLevel = (levelNum) => {
  crossword.loadLevel(levelNum)
  crossword.assembleBoard()
  crossword.insertWords()

  // return crossword.getSquares()
}

const crosswordLevel = createCrosswordLevel(6)
// console.log({ crosswordLevel })
