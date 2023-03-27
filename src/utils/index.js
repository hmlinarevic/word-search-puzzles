/**
 * Return a random number between specified min and max values.
 * Both min and max values are included in the specified range and
 * could be returned.
 */

export const getRandomNumber = (min, max) => {
    min = Math.floor(min)
    max = Math.ceil(max)

    return Math.floor(Math.random() * (max + 1 - min) + min)
}

/**
 * Return a random lowercase letter.
 */

export const getRandomLetter = () => {
    // lowercase letters ascii range
    const range = {
        start: 97,
        end: 122,
    }

    return String.fromCharCode(getRandomNumber(range.start, range.end))
}

/**
 * Return a random array element.
 */

export const selectRandomArrayElement = (ar) => {
    const index = getRandomNumber(0, ar.length - 1)

    return ar[index]
}
