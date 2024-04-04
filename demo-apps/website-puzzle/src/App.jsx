import { useState } from 'react'
import Board from './components/Board'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DndContext } from '@dnd-kit/core'

function App() {
  return <Board height={3} width={3} />
}

export default App
