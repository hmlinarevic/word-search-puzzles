export const getRandomNumber = (min, max) => {
  /*
     returned value is between the range of min and max
    - and can include min or max
  */

  min = Math.floor(min)
  max = Math.ceil(max)

  return Math.floor(Math.random() * (max + 1 - min) + min)
}

export const getRandomLetter = (options) => {
  let range = {
    start: null,
    end: null,
  }

  if (options === 'lowercase') {
    range.start = 97
    range.end = 122
  } else if (options === 'uppercase') {
    range.start = 65
    range.end = 90
  } else {
    throw new Error(
      `specify paramater: 'lowercase' (typeof string) or 'uppercase' (typeof string)`
    )
  }

  return String.fromCharCode(getRandomNumber(range.start, range.end))
}

export const selectRandomArrayElement = (ar) => {
  const index = getRandomNumber(0, ar.length - 1)

  return ar[index]
}
