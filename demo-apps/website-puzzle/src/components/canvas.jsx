import { useState } from "react"
import Piece from "./Piece.jsx"

const COLORS = [
  "#FF5733",
  "#FFC300",
  "#FFDC00",
  "#D2FF00",
  "#66FF00",
  "#00FF66",
  "#00FFD2",
  "#0095FF",
  "#0044FF",
  "#002BFF",
  "#5600FF",
  "#B200FF",
  "#FF00E6",
  "#FF0052",
  "#FF0033",
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getRandomColor() {
  return COLORS[getRandomInt(COLORS.length)]
}

const mockShapes = {
  1: {
    id: "1",
    x: getRandomInt(500),
    y: getRandomInt(500),
    fill: getRandomColor(),
  },
  2: {
    id: "2",
    x: getRandomInt(500),
    y: getRandomInt(500),
    fill: getRandomColor(),
  },
  3: {
    id: "3",
    x: getRandomInt(500),
    y: getRandomInt(500),
    fill: getRandomColor(),
  },
}

const Canvas = () => {
  const [shapes] = useState(mockShapes)

  return (
    <div className="canvas">
      {Object.keys(shapes).map((id) => (
        <Piece key={id} shape={shapes[id]} />
      ))}
    </div>
  )
}

export default Canvas
