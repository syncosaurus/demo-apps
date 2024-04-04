import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
    height: 100,
    width: 100,
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.id}
      {props.children}
    </button>
  )
}
