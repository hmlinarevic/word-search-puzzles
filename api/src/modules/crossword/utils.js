import { LEVELS } from './config.js'

export const loadLevelConfig = (levelNum) => LEVELS[levelNum]

export const getRandomNumber = (min, max) => {
  /*
     returned value is between the range of min and max
    - and can include min or max
  */

  min = Math.floor(min)
  max = Math.ceil(max)

  return Math.floor(Math.random() * (max + 1 - min) + min)
}

export const getRandomLowercaseLetter = () => {
  return String.fromCharCode(getRandomNumber(97, 122))
}

export const selectRandomArrayElement = (ar) => {
  const index = getRandomNumber(0, ar.length - 1)

  return ar[index]
}

export const getNumFromColumnChar = (char) => {
  return char.codePointAt() - 64
}
