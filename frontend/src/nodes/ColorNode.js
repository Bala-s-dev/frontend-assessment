// frontend/src/nodes/ColorNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ColorNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || '#58A6FF');

  return (
    <BaseNode id={id} label="Theme Variable" icon="󰏘" handles={[{ type: 'source', position: Position.Right, id: 'color-out' }]}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ width: '40px', height: '30px', border: 'none', background: 'none', cursor: 'pointer' }}
        />
        <code style={{ fontSize: '11px', color: 'var(--text-primary)' }}>{color.toUpperCase()}</code>
      </div>
    </BaseNode>
  );
};  