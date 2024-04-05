import { useDroppable } from '@dnd-kit/core'

export function Droppable({ id, cell, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })
  const style = {
    backgroundColor: isOver ? 'green' : 'grey',
    height: 100,
    width: 100,
    border: '1px solid black',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}
