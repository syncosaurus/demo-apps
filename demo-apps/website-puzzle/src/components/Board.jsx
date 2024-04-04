import { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Droppable } from './Droppable'

function createBoard({ height, width }) {
  let board = []
  for (let i = 0; i < height; i++) {
    let currRow = []
    for (let j = 0; j < width; j++) {
      currRow[j] = { parent: null, id: width * i + j }
    }
    board[i] = currRow
  }
  console.log(board)
  return board
}

function BoardVertical({ rows }) {
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
      {row.map((cell) => {
        return <Droppable id={cell.id} key={cell.id} cell={cell} />
      })}
    </Stack>
  )
}

function Board({ height, width }) {
  const [board, setBoard] = useState([])
  useEffect(() => {
    setBoard(createBoard({ height, width }))
  }, [height, width])

  return <BoardVertical rows={board} />
}

export default Board
