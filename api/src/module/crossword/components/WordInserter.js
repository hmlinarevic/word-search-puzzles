import RandomWords from './RandomWords.js'
import Placement from './Placement.js'
import board from './Board.js'
import level from './Level.js'
import InsertWord from './InsertWord.js'

class WordInserter {
  insertWords() {
    this.insertedWords = {
      count: 0,
      list: []
    }

    this.attemptedInserts = 0

    while (this.insertedWords.count < level.numOfWords) {
    this.attemptedInserts ++
      this.attemptInsert()
    }

    console.log(board.squares)
    console.log(this.insertedWords.list)
    console.log({attemptedInserts: this.attemptedInserts})
  }

  attemptInsert() {
    const startSquareIndex = board.getRandomSquareIndex()
    const startSquareValue = board.read(startSquareIndex)

    if (startSquareValue === null) {
      const placement = new Placement(startSquareIndex)
      const insertWord = new InsertWord(
        RandomWords.getWords(1, placement.maxSize)
      )

      // testing
      // insertWord.word = 'love' // --> 'null, null, null, 's'
      // board.squares[36] = 'x'
      // board.squares[20] = 's'

      placement.setPossibleDirs(insertWord.word)
      placement.setSelectedDir()

      const collisions = placement.getCollisionsData()

      if (collisions.length) {
        console.log('we have collisions, people')
        insertWord.tryToModify(collisions)
      }

      if (collisions.length && !insertWord.modified) {
        console.log('attempting insert...')
        return this.attemptInsert()
      }

      const wordToInsert = insertWord.modified || insertWord.word

      board.place(wordToInsert, placement.selectedDir)

      this.insertedWords.count++
      this.insertedWords.list.push(wordToInsert)

      // console.log(placement)
      // console.log(insertWord)
      // console.log({ collisions })
    }
  }
}

export default new WordInserter()
