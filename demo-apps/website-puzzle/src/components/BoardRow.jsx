import Stack from 'react-bootstrap/Stack'
import { Droppable } from './Droppable'
import { Draggable } from './Draggable'

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

export default BoardRow