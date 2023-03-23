import defaultWordsList from "./words.js"

import { getRandomNumber, selectRandomArrayElement } from "../../utils/index.js"

export default class RandomWords {
    /**
     * Get specified number of random words (or: and with specified start letter)
     * @param {number} numOfWords - number of random words
     * @param {string} [letter] - start letter of random word
     * @return {array} array containing random words
     */
    static getWords(numOfWords, maxWordLength, letter = null) {
        let activeWordsList = defaultWordsList
        const isletterArgValid =
            typeof letter === "string" && letter.length === 1

        activeWordsList = defaultWordsList.filter((word) => {
            if (letter && isletterArgValid) {
                return word.charAt(0) === letter && word.length <= maxWordLength
            } else {
                return word.length <= maxWordLength
            }
        })

        const indexHistory = []
        const results = []

        for (let i = 0; i < numOfWords && i < activeWordsList.length; i++) {
            let index = getRandomNumber(0, activeWordsList.length - 1)

            // prevent returning same word
            if (indexHistory.includes(index)) {
                i--
                continue
            } else {
                indexHistory.push(index)
                results.push(activeWordsList[index])
            }
        }

        return results.length === 1 ? results[0] : results
    }

    // TODO -> extract getting the word from getWords()
    static getWord() {}

    static getWordFromPartials(partials, wordTargetLength) {
        // console.log({ partials })

        const results = defaultWordsList.filter((word) => {
            if (word.length === wordTargetLength) {
                if (
                    partials.every(
                        (partial) => partial.letter === word[partial.index]
                    )
                ) {
                    return word
                }
            }
        })

        // console.log({ results })

        return results.length ? selectRandomArrayElement(results) : undefined
    }
}
