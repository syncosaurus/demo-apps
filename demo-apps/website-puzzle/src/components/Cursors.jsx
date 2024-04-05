import { usePresence, useUpdateMyPresence } from 'syncosaurus'

import Cursor from './Cursor'

const cursorColors = [
  '#FF6EC7', // Hot pink
  '#7A4ED9', // Purple
  '#FFD700', // Gold
  '#00FFEE', // Cyan
  '#FF00FF', // Magenta
  '#FFA500', // Orange
  '#00FF00', // Neon green
  '#FF6347', // Tomato
  '#00FFFF', // Aqua
  '#FF1493', // Deep pink
]

const Cursors = ({ synco }) => {
  const others = usePresence(synco)
  useUpdateMyPresence(synco)

  return (
    <>
      {Object.entries(others).map(([id, { x, y }], idx) => {
        return (
          <div
            key={id}
            className="cursorContainer"
            style={{
              position: 'absolute',
              transform: `translate(${x}px, ${y}px)`,
              zIndex: 100,
            }}
          >
            <Cursor fill={cursorColors[idx]} />
          </div>
        )
      })}
    </>
  )
}

export default Cursors
