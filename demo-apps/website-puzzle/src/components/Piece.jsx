import { useDraggable } from '@dnd-kit/core'
import { useSubscribe } from 'syncosaurus'
import { CSS } from '@dnd-kit/utilities'

export function Piece({ id, children, styles, synco }) {
  const getPiece = tx => tx.get(String(id))
  const params = useSubscribe(synco, getPiece, {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
  })
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })
  console.log(id, params)
  const style = {
    transform: CSS.Translate.toString(transform),
    height: 100,
    width: 100,
  }
  return (
    <button
      ref={setNodeRef}
      style={{ ...style, ...styles, ...params }}
      {...listeners}
      {...attributes}
    >
      {id}
      {children}
    </button>
  )
}
