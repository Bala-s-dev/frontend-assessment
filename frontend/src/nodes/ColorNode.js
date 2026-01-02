import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ColorNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || '#007bff');
  return (
    <BaseNode id={id} label="Color Picker" handles={[{ type: 'source', position: Position.Right, id: 'color-out' }]}>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </BaseNode>
  );
};