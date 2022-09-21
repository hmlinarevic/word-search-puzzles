import { DIRECTIONS } from '../config.js'
import { selectRandomArrayElement } from '../../../utils/index.js'

class Placement {
  constructor(startSquareIndex, board) {
    this.startSquareIndex = startSquareIndex

    this.directions = this.#getDirections(board)
    this.maxSize = this.#getMaxSize()
  }

  #getDirections(board) {
    const indexes = DIRECTIONS.reduce((obj, dir) => {
      // get increment
      const directionIncrement = board.navigation[dir]
      // set variable
      let squareIndex = this.startSquareIndex

      // add direction with first letter index to the obj
      obj[dir] = []

      if (dir === 'N') {
        while (board.getRowNum(squareIndex) >= 1) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'S') {
        while (board.getRowNum(squareIndex) <= board.size) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'W' || dir === 'E') {
        const currentRow = board.getRowNum(squareIndex)
        while (currentRow === board.getRowNum(squareIndex)) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'NE' || dir === 'SE' || dir === 'SW' || dir === 'NW') {
        let currentRow
        let nextRow
        do {
          currentRow = board.getRowNum(squareIndex)

          obj[dir].push(squareIndex)
          squareIndex += directionIncrement

          nextRow = board.getRowNum(squareIndex)
        } while (Math.abs(currentRow - nextRow) === 1)
      }

      return obj
    }, {})

    return indexes
  }

  setRandomDirection(insertWord) {
    const possibleDirs = this.getPossibleDirections(insertWord)
    console.log(possibleDirs)
    this.randomDir = selectRandomArrayElement(Object.values(possibleDirs))
  }

  #getMaxSize() {
    let max = 0

    const directions = Object.values(this.directions)
    directions.forEach((direction) => {
      max = direction.length > max ? direction.length : max
    })

    return max
  }

  /**
   * Based on the insertWord length set possible directions (direction indexes will be the same length as the insertWord)
   * @param {string} insertWord - word to be inserted into board
   */
  getPossibleDirections(insertWord) {
    const results = {}

    for (const [dir, indexes] of Object.entries(this.directions)) {
      if (insertWord.length <= indexes.length) {
        results[dir] = indexes.slice(0, insertWord.length)
      }
    }

    return results
  }

  // setSelectedDir() {
  //   const randomDir = selectRandomArrayElement(this.possibleDirs)

  //   this.selectedDir = this.directions[randomDir]
  // }

  getCollisionsData(board) {
    const results = []

    this.randomDir.forEach((squareIndex, i) => {
      // var i is actuall letter index of the word we are trying to insert
      const squareValue = board.readSquare(squareIndex)

      if (squareValue !== null) {
        // console.log('collision!')
        const collision = { squareIndex, squareValue, letterIndex: i }

        results.push(collision)
      }
    })

    return results
  }
}

export default Placement
