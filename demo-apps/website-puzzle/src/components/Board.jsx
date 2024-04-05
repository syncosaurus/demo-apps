import { useEffect, useState } from 'react'

import { DndContext } from '@dnd-kit/core'
import { createBoard, createPieces } from '../utils/helpers'
import RowGenerator from './RowGenerator'
import { Piece } from './Piece'

function Board({ height, width, synco }) {
  const [board, setBoard] = useState([])
  const [freePieces, setFreePieces] = useState(createPieces(9))
  const [placedPieces, setPlacedPieces] = useState([])

  useEffect(() => {
    setBoard(createBoard({ height, width }))
  }, [height, width])

  const handleDragEnd = e => {
    const piece = freePieces.find(piece => piece.id === e.active.id)
    if (piece === undefined) return
    if (e.over === null || e.active.id !== e.over.id) {
      piece.position.x += e.delta.x
      piece.position.y += e.delta.y
      setFreePieces([...freePieces])
      return
    }

    const currPieceId = e.active.id

    setFreePieces(prev => prev.filter(piece => piece.id !== currPieceId))
    setPlacedPieces(prev => prev.concat(piece))
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {freePieces.map(piece => (
        <Piece
          key={piece.id}
          id={piece.id}
          styles={{
            position: 'absolute',
            left: `${piece.position.x}px`,
            top: `${piece.position.y}px`,
          }}
          synco={synco}
        />
      ))}
      <RowGenerator rows={board} placedPieces={placedPieces} />
    </DndContext>
  )
}

export default Board
