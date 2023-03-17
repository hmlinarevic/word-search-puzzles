import RandomWords from '../../randomWords/index.js'

class InsertWord {
  constructor(word) {
    this.word = word
    this.modified = null
  }

  /**
   * Modify insert word with collision letters
   * @param {string} insertWord - word to be inserted into board
   * @param {object} placementSquares - object with square indexes for placing
   * @param {object} collisions - array with collision entries
   * @return {string} modified insert word
   */
  // TODO --> add collisions paramater
  tryToModify(collisions) {
    const { getWordFromPartials } = RandomWords

    const partials = collisions.map((collision) => {
      return {
        letter: collision.squareValue,
        index: collision.letterIndex,
      }
    })

    this.#setModified(getWordFromPartials(partials, this.word.length))
  }

  #setModified(val) {
    this.modified = val
  }
}

export default InsertWord
