import level from './Level.js'
import board from './Board.js'
import wordInserter from './WordInserter.js'

class Crossword {
  loadLevel(levelNum) {
    level.load(levelNum)
  }

  assembleBoard() {
    board.assemble()
  }

  insertWords() {
    wordInserter.insertWords()
  }

  getSquares() {
    return board.getSquares()
  }
}

export default new Crossword()
