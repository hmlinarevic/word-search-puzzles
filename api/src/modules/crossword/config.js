export const LEVELS = Object.freeze({
  1: { size: 8, numOfSquares: 64, numOfWords: 1, maxWordLength: 8 },
  2: { size: 8, numOfSquares: 64, numOfWords: 2, maxWordLength: 8 },
  3: { size: 8, numOfSquares: 64, numOfWords: 3, maxWordLength: 8 },

  4: { size: 10, numOfSquares: 100, numOfWords: 4, maxWordLength: 10 },
  5: { size: 10, numOfSquares: 100, numOfWords: 5, maxWordLength: 10 },
  6: { size: 10, numOfSquares: 100, numOfWords: 6, maxWordLength: 10 },

  7: { size: 12, numOfSquares: 144, numOfWords: 7, maxWordLength: 12 },
  8: { size: 12, numOfSquares: 144, numOfWords: 8, maxWordLength: 12 },
  9: { size: 12, numOfSquares: 144, numOfWords: 9, maxWordLength: 12 },

  10: { size: 14, numOfSquares: 156, numOfWords: 10, maxWordLength: 14 },
})

export const TIME_ALLOCATION = Object.freeze({
  // time allocation per game phase in seconds

  // prologue phase (when user memorizes words)
  // game phase (when user looks for words in the crossword)

  1: { prologue: 3, game: 20 },
  2: { prologue: 5, game: 50 },
  3: { prologue: 8, game: 60 },

  4: { prologue: 12, game: 5 },
  5: { prologue: 12, game: 100 },
  6: { prologue: 16, game: 120 },

  7: { prologue: 18, game: 120 },
  8: { prologue: 30, game: 140 },
  9: { prologue: 40, game: 180 },

  10: { prologue: 60, game: 200 },
})

export const DIRECTIONS = Object.freeze([
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW',
])
