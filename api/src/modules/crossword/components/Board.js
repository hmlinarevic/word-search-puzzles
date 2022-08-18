import level from './Level.js'
import { DIRECTIONS } from '../config.js'
import { getRandomNumber, getNumFromColumnChar } from '../utils.js'

class Board {


  assemble() {
    this.columns = this.#makeColumns(level.size)
    this.navigation = this.#makeNavigation(level.size)
    this.squares = this.#makeSquares(level.numOfSquares)
  }

  #makeColumns() {
    const asciiCharA = 65
    const columns = []

    for (let i = 0; i < level.size; i++) {
      columns.push(String.fromCharCode(asciiCharA + i))
    }

    return columns
  }

  #makeNavigation() {
    return DIRECTIONS.reduce((obj, dir) => {
      switch (dir) {
        case 'N':
          obj[dir] = -level.size
          break
        case 'S':
          obj[dir] = +level.size
          break
        case 'W':
          obj[dir] = -1
          break
        case 'E':
          obj[dir] = +1
          break
        case 'NW':
          obj[dir] = -(level.size + 1)
          break
        case 'NE':
          obj[dir] = -(level.size - 1)
          break
        case 'SW':
          obj[dir] = +(level.size - 1)
          break
        case 'SE':
          obj[dir] = +(level.size + 1)
          break
        default:
          throw new Error('error while creating navigation')
      }
      return obj
    }, {})
  }

  #makeSquares() {
    return new Array(level.numOfSquares).fill(null)
  }

  getSquareCoordinate(index) {
    index += 1 // offset for array 0 index access
    const row = Math.ceil(index / level.size)
    const column = this.columns[index - (row - 1) * level.size - 1]
    return `${column}${row}`
  }

  getRowNum(squareIndex) {
    squareIndex+=1

    if (squareIndex <= 0 || squareIndex > level.numOfSquares) {
      return
    }


    return Math.ceil(squareIndex / level.size)
  }

  getColumnNum(squareIndex) {
    squareIndex+=1
    console.log({squareIndex})
    const column =
      this.columns[
        squareIndex - (this.getRowNum(squareIndex) - 1) * level.size - 1
      ]
      console.log({column})
      return getNumFromColumnChar(column)
  }

  getSquares() {
    return this.squares
  }

  getStartSquare() {
    return this.squares[this.getRandomSquare()]
  }

  getRandomSquare() {
    return getRandomNumber(0, level.numOfSquares)
  }

  getRandomSquareIndex() {
    return getRandomNumber(0, level.numOfSquares)
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
}

export default new Board()
