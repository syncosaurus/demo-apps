const movePiece = (tx, { id, delta }) => {
  console.log(delta)
  if (delta.x === undefined || delta.y === undefined) return
  const prev = tx.get(id) || { x: 0, y: 0 }
  const newPosition = { x: prev.x + delta.x, y: prev.y + delta.y }
  const next = { ...prev, ...newPosition }
  tx.set(id, next)
}

export default { movePiece }
