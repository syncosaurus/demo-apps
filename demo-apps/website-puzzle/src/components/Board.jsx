import { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Droppable } from './Droppable'
import { Draggable } from './Draggable'
import { DndContext } from '@dnd-kit/core'

function createBoard({ height, width }) {
  let board = []
  for (let i = 0; i < height; i++) {
    let currRow = []
    for (let j = 0; j < width; j++) {
      currRow[j] = { parent: null, id: width * i + j }
    }
    board[i] = currRow
  }
  return board
}

function RowGenerator({ rows }) {
  return (
    <Stack>
      {rows.map((row, idx) => {
        return <BoardRow key={idx} row={row} />
      })}
    </Stack>
  )
}

function BoardRow({ row }) {
  return (
    <Stack direction="horizontal">
      {row.map(cell => {
        return <Droppable id={cell.id} key={cell.id} cell={cell} />
      })}
    </Stack>
  )
}

function Board({ height, width }) {
  const [board, setBoard] = useState([])
  const [freePieces, setFreePieces] = useState([<Draggable key={1} id={1} />])
  const [placedPieces, setPlacedPieces] = useState([])

  useEffect(() => {
    setBoard(createBoard({ height, width }))
  }, [height, width])

  const handleDragEnd = e => {
    const currPieceId = e.active.id
    const overCellId = e.over.id
    if (overCellId && currPieceId.id === overCellId.id) {
      console.log('success!')
      setFreePieces(prev => {
        return prev.filter(ele => ele.props.id !== currPieceId)
      })
      setPlacedPieces(prev =>
        prev.concat(freePieces.find(piece => piece.props.id === currPieceId))
      )
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {freePieces.map(piece => piece)}
      <RowGenerator rows={board} placedPieces={placedPieces} />
    </DndContext>
  )
}

export default Board
