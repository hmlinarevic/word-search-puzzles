import level from './Level.js'
import board from './Board.js'
import { DIRECTIONS } from '../config.js'
import { selectRandomArrayElement } from '../utils.js'

class Placement {
  constructor(startSquareIndex) {
    this.startSquareIndex = startSquareIndex
    this.directions = this.#getDirections()
    this.maxSize = this.#getMaxSize()
  }

  #getDirections() {
    const { getRowNum } = board

    const indexes = DIRECTIONS.reduce((obj, dir) => {
      // get increment
      const directionIncrement = board.navigation[dir]
      // set variable
      let squareIndex = this.startSquareIndex

      // add direction with first letter index to the obj
      obj[dir] = []

      if (dir === 'N') {
        while (getRowNum(squareIndex) >= 1) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'S') {
        while (getRowNum(squareIndex) <= level.size) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'W' || dir === 'E') {
        const currentRow = getRowNum(squareIndex)
        while (currentRow === getRowNum(squareIndex)) {
          obj[dir].push(squareIndex)
          squareIndex += directionIncrement
        }
      }

      if (dir === 'NE' || dir === 'SE' || dir === 'SW' || dir === 'NW') {
        let currentRow
        let nextRow
        do {
          currentRow = getRowNum(squareIndex)

          obj[dir].push(squareIndex)
          squareIndex += directionIncrement

          nextRow = getRowNum(squareIndex)
        } while (Math.abs(currentRow - nextRow) === 1)
      }

      return obj
    }, {})

    return indexes
  }

  #getMaxSize() {
    let max = 0

    const directions = Object.values(this.directions)
    directions.forEach((direction) => {
      max = direction.length > max ? direction.length : max
    })

    return max
  }

  setPossibleDirs(word) {
    const results = []

    for (const [dir, indexes] of Object.entries(this.directions)) {
      word.length <= indexes.length && results.push(dir)
    }

    this.possibleDirs = results
  }

  setSelectedDir() {
    const randomDir = selectRandomArrayElement(this.possibleDirs)

    this.selectedDir = this.directions[randomDir]
  }

  getCollisionsData() {
    const results = []

    this.selectedDir.forEach((squareIndex, i) => {
      // var i is actuall letter index of the word we are trying to insert
      const squareValue = board.readSquare(squareIndex)

      if (squareValue !== null) {
        console.log('collision!')
        const collision = { squareIndex, squareValue, letterIndex: i}

        results.push(collision)
      }
    })

    return results
  }
}

export default Placement