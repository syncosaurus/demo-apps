function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const movePiece = (tx, { id, delta }) => {
  if (delta.x === undefined || delta.y === undefined) return
  const prev = tx.get(id) || { position: { x: 0, y: 0 } }
  const newPosition = {
    x: prev.position.x + delta.x,
    y: prev.position.y + delta.y,
  }
  const next = { ...prev, position: newPosition }
  tx.set(id, next)
  console.log('prev', prev, 'next', next)
  console.log('moved piece:', id)
}

const placePiece = (tx, id) => {
  // change prop
  const prevPiece = tx.get(id)
  const nextPiece = { ...prevPiece, placed: true }
  tx.set(id, nextPiece)

  const prevFree = tx.get('free') || [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const nextFree = prevFree.filter(x => x !== id)
  tx.set('free', nextFree)

  const prevPlaced = tx.get('placed') || []
  const nextPlaced = prevPlaced.concat(id)
  tx.set('placed', nextPlaced)
}

const restartPuzzle = tx => {
  tx.set('free', [1, 2, 3, 4, 5, 6, 7, 8, 9])
  tx.set('placed', [])

  for (let i = 1; i <= 9; i++) {
    tx.set(i, {
      position: {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      },
      placed: false,
    })
  }
}

export default { movePiece, placePiece, restartPuzzle }
