function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function createBoard({ height, width }) {
  let board = []
  for (let i = 0; i < height; i++) {
    let currRow = []
    for (let j = 0; j < width; j++) {
      currRow[j] = { parent: null, id: width * i + j + 1 }
    }
    board[i] = currRow
  }
  return board
}

export function createPieces(num) {
  let pieces = []
  for (let i = 1; i <= num; i++) {
    pieces.push({
      id: i,
      position: {
        x: getRandomInt(400),
        y: getRandomInt(400),
        scaleX: 1,
        scaleY: 1,
      },
      placed: false,
    })
  }
  return pieces
}
