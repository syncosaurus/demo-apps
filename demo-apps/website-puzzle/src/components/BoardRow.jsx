import Stack from 'react-bootstrap/Stack'
import { Droppable } from './Droppable'
import { Piece } from './Piece'

function BoardRow({ row, placedPieceIds, synco }) {
  return (
    <Stack direction="horizontal">
      {row.map(cell => {
        return (
          <Droppable id={cell.id} key={cell.id} cell={cell}>
            {placedPieceIds.includes(cell.id) && (
              <Piece key={cell.id} id={cell.id} synco={synco} />
            )}
          </Droppable>
        )
      })}
    </Stack>
  )
}

export default BoardRow
