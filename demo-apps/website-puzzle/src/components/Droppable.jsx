import { useDroppable } from '@dnd-kit/core'

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined,
    height: 100,
    width: 100,
    border: '1px solid black',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
