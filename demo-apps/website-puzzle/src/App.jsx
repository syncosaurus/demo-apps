import Board from './components/Board'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Syncosaurus, { useUpdateMyPresence } from 'syncosaurus'
import mutators from './mutators'
import { useEffect } from 'react'
import Cursors from './components/Cursors'

const synco = new Syncosaurus({
  mutators,
  userID: String(Math.random()),
  server: import.meta.env.VITE_DO_URL,
})

function App() {
  useUpdateMyPresence(synco)

  useEffect(() => {
    synco.launch('foo')
  }, [])
  return (
    <>
      <Cursors synco={synco} />
      <Board height={3} width={3} synco={synco} />
    </>
  )
}

export default App
