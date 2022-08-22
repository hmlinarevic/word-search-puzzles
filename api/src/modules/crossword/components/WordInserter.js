import RandomWords from '../../randomWords/index.js'
import Placement from './Placement.js'
import InsertWord from './InsertWord.js'

class WordInserter {
  constructor(board) {
    this.board = board

    this.numOfWordsToInsert = this.board.numOfWords
    this.attemptedInserts = 0
    this.insertedWords = {
      count: 0,
      data: [
        // fill with {word: '', indexes: []}
      ],
    }
  }

  insertWords() {
    while (this.insertedWords.count < this.numOfWordsToInsert) {
      this.attemptedInserts++
      this.#attemptInsert()
    }
  }

  #attemptInsert() {
    const startSquareIndex = this.board.getRandomSquareIndex()
    const startSquareValue = this.board.read(startSquareIndex)

    if (startSquareValue === null) {
      console.log('attempting insert...')
      console.log({ board: this.board })

      const placement = new Placement(startSquareIndex, this.board)
      const insertWord = new InsertWord(
        RandomWords.getWords(1, placement.maxSize)
      )

      placement.setPossibleDirs(insertWord.word)
      placement.setSelectedDir()

      const collisions = placement.getCollisionsData(this.board)

      if (collisions.length) {
        insertWord.tryToModify(collisions)
      }

      if (collisions.length && !insertWord.modified) {
        return this.#attemptInsert()
      }

      const wordToInsert = insertWord.modified || insertWord.word

      this.board.place(wordToInsert, placement.selectedDir)

      this.insertedWords.count++
      this.insertedWords.data.push({
        word: wordToInsert,
        indexes: placement.selectedDir,
      })
    }
  }
}

export default WordInserter
