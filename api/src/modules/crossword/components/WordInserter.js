import RandomWords from '../../randomWords/index.js'
import Placement from './Placement.js'
import InsertWord from './InsertWord.js'

class WordInserter {
  constructor(board, numOfWordsToInsert) {
    this.board = board

    // TESTING //

    // this.numOfWordsToInsert = numOfWordsToInsert
    this.numOfWordsToInsert = 1

    // TESTING //

    this.attemptedInserts = 0
    this.insertedWords = {
      count: 0,
      data: [],
    }
  }

  insertWords() {
    while (this.insertedWords.count < this.numOfWordsToInsert) {
      this.attemptedInserts++
      this.#attemptInsert()
    }
  }

  // testing
  insertCustomData(data) {}

  #attemptInsert() {
    const startSquareIndex = this.board.getRandomSquareIndex()
    const startSquareValue = this.board.read(startSquareIndex)

    if (startSquareValue === null) {
      const placement = new Placement(startSquareIndex, this.board)
      const insertWord = new InsertWord(
        RandomWords.getWords(1, placement.maxSize)
      )

      placement.setRandomDirection(insertWord.word)

      const collisions = placement.getCollisionsData(this.board)

      if (collisions.length) {
        insertWord.tryToModify(collisions)
      }

      if (collisions.length && !insertWord.modified) {
        return this.#attemptInsert()
      }

      const wordToInsert = insertWord.modified || insertWord.word

      this.board.place(wordToInsert, placement.randomDir)
      this.insertedWords.count++

      // set inserted data (edit select dir length)
      const placedIndexes = [...placement.randomDir].splice(
        0,
        wordToInsert.length
      )
      this.insertedWords.data.push({
        word: wordToInsert,
        indexes: placedIndexes,
      })
    }
  }
}

export default WordInserter
