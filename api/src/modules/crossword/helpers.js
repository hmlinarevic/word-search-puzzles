import { LEVELS } from './config.js'
import { DIRECTIONS } from './config.js'

export const loadLevelConfig = (levelNum) => LEVELS[levelNum]

export const makeColumns = (levelSize) => {
  const columns = []

  for (let i = 0; i < levelSize; i++) {
    columns.push(String.fromCharCode('A'.charCodeAt() + i))
  }

  return columns
}

export const makeNavigation = (levelSize) => {
  return DIRECTIONS.reduce((obj, dir) => {
    switch (dir) {
      case 'N':
        obj[dir] = -levelSize
        break
      case 'S':
        obj[dir] = +levelSize
        break
      case 'W':
        obj[dir] = -1
        break
      case 'E':
        obj[dir] = +1
        break
      case 'NW':
        obj[dir] = -(levelSize + 1)
        break
      case 'NE':
        obj[dir] = -(levelSize - 1)
        break
      case 'SW':
        obj[dir] = +(levelSize - 1)
        break
      case 'SE':
        obj[dir] = +(levelSize + 1)
        break
      default:
        throw new Error('error while creating navigation')
    }
    return obj
  }, {})
}

export const makeSquares = (numOfSquares) => new Array(numOfSquares).fill(null)
