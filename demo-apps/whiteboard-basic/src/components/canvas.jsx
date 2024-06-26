import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getRandomColor, getRandomInt } from '../utils/helpers.js';

import Syncosaurus from 'syncosaurus';
import { useSubscribe } from 'syncosaurus';
import mutators from '../mutators.js';

import Rectangle from './rectangle';
import Cursors from './cursors.jsx';

const getShapeIds = tx => tx.get('shapeIds');
console.log(import.meta.env.VITE_DO_URL)
const synco = new Syncosaurus({ mutators, userID: uuidv4(), server: import.meta.env.VITE_DO_URL });

const Canvas = () => {
  const [selectedShapeId, setSelectedShapeId] = useState(null);

  useEffect(() => {
    synco.launch('foooooooo');
  }, []);

  const shapeIds = useSubscribe(synco, getShapeIds, []);

  const handleShapePointerDown = (e, id) => {
    e.preventDefault();
    setSelectedShapeId(id);
  };

  const handleCanvasPointerUp = () => {
    setSelectedShapeId(null);
  };

  const handleCanvasPointerMove = e => {
    if (!selectedShapeId) return;

    const x = Math.floor(e.clientX) - 54;
    const y = Math.floor(e.clientY) - 175;
    synco.mutate.modifyShape({ id: selectedShapeId, x, y });
  };

  const handleAddButtonClick = () => {
    synco.mutate.addShape({
      id: uuidv4(),
      x: getRandomInt(500),
      y: getRandomInt(500),
      fill: getRandomColor(),
    });
  };

  return (
    <>
      <Cursors synco={synco} />
      <button onClick={handleAddButtonClick}>Add shape</button>
      <p>Selected shape: {selectedShapeId && selectedShapeId.slice(0, 3)}</p>
      <p>Total shapes: {shapeIds.length}</p>
      <div
        className="canvas"
        onPointerUp={handleCanvasPointerUp}
        onPointerMove={handleCanvasPointerMove}
      >
        {shapeIds.map(id => (
          <Rectangle
            key={id}
            id={id}
            onShapePointerDown={handleShapePointerDown}
            synco={synco}
          />
        ))}
      </div>
    </>
  );
};

export default Canvas;
