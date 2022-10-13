import { getRandomNumber, getRandomLetter } from '../../../utils/index.js'
import { makeColumns, makeNavigation, makeSquares } from '../helpers.js'

class Board {
  constructor({ size, numOfSquares, numOfWords }) {
    this.size = size
    this.numOfSquares = numOfSquares
    this.numOfWords = numOfWords

    this.columns = makeColumns(this.size)
    this.navigation = makeNavigation(this.size)
    this.squares = makeSquares(this.numOfSquares)
  }

  getSquareCoordinate(index) {
    index += 1 // offset for array 0 index access
    const row = Math.ceil(index / this.size)
    const column = this.columns[index - (row - 1) * this.size - 1]
    return `${column}${row}`
  }

  getRowNum(squareIndex) {
    squareIndex += 1

    if (squareIndex <= 0 || squareIndex > this.numOfSquares) {
      return
    }

    return Math.ceil(squareIndex / this.size)
  }

  getSquares() {
    return this.squares
  }

  getStartSquare() {
    return this.squares[this.getRandomSquare()]
  }

  getRandomSquare() {
    return getRandomNumber(0, this.numOfSquares)
  }

  getRandomSquareIndex() {
    return getRandomNumber(0, this.numOfSquares)
  }

  getRandomSquareValue() {
    return this.squares[this.getRandomSquare()]
  }

  getSquareValue(index) {
    return this.squares[index]
  }

  readSquare(index) {
    return this.squares[index]
  }

  read(squareIndex) {
    return this.squares[squareIndex]
  }

  place(word, direction) {
    word.split('').forEach((letter, i) => {
      this.squares[direction[i]] = letter
    })
  }

  fillEmptySquares() {
    this.squares.forEach((square, i) => {
      if (square === null) {
        this.squares[i] = getRandomLetter('lowercase')
      }
    })
  }
}

export default Board
