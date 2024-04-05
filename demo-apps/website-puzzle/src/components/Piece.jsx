import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export function Piece({ id, children, styles }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
    height: 100,
    width: 100,
  }
  return (
    <button
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      {...listeners}
      {...attributes}
    >
      {id}
      {children}
    </button>
  )
}
