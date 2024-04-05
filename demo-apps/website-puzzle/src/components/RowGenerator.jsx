import Stack from 'react-bootstrap/Stack'
import BoardRow from './BoardRow'

function RowGenerator({ rows, placedPieces }) {
  return (
    <Stack>
      {rows.map((row, idx) => {
        return <BoardRow key={idx} row={row} placedPieces={placedPieces} />
      })}
    </Stack>
  )
}

export default RowGenerator
