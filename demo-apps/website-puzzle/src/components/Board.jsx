import { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Droppable } from './Droppable'
import { Draggable } from './Draggable'
import { DndContext } from '@dnd-kit/core'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function createBoard({ height, width }) {
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

function createPieces(num) {
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
    })
  }
  return pieces
}

function RowGenerator({ rows, placedPieces }) {
  return (
    <Stack>
      {rows.map((row, idx) => {
        return <BoardRow key={idx} row={row} placedPieces={placedPieces} />
      })}
    </Stack>
  )
}

function BoardRow({ row, placedPieces }) {
  return (
    <Stack direction="horizontal">
      {row.map(cell => {
        const matchingPiece = placedPieces.find(piece => piece.id === cell.id)
        return (
          <Droppable id={cell.id} key={cell.id} cell={cell}>
            {matchingPiece && (
              <Draggable key={matchingPiece.id} id={matchingPiece.id} />
            )}
          </Droppable>
        )
      })}
    </Stack>
  )
}

function Board({ height, width }) {
  const [board, setBoard] = useState([])
  const [freePieces, setFreePieces] = useState(createPieces(9))
  const [placedPieces, setPlacedPieces] = useState([])

  useEffect(() => {
    setBoard(createBoard({ height, width }))
  }, [height, width])

  const handleDragEnd = e => {
    const piece = freePieces.find(piece => piece.id === e.active.id)

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
        <Draggable
          key={piece.id}
          id={piece.id}
          styles={{
            position: 'absolute',
            left: `${piece.position.x}px`,
            top: `${piece.position.y}px`,
          }}
        />
      ))}
      <RowGenerator rows={board} placedPieces={placedPieces} />
    </DndContext>
  )
}

export default Board
