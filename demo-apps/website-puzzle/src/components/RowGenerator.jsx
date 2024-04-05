import Stack from 'react-bootstrap/Stack'
import BoardRow from './BoardRow'

function RowGenerator({ rows, placedPieceIds, synco }) {
  return (
    <Stack>
      {rows.map((row, idx) => {
        return (
          <BoardRow
            key={idx}
            row={row}
            placedPieceIds={placedPieceIds}
            synco={synco}
          />
        )
      })}
    </Stack>
  )
}

export default RowGenerator
