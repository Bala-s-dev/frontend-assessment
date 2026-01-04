// frontend/src/nodes/outputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M19.8 12H9" /></svg>;

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'out_'));
  return (
    <BaseNode
      id={id}
      label="Output"
      typeColor="#ef4444"
      icon={Icon}
      handles={[{ type: 'target', position: Position.Left, id: 'value' }]}
    >
      <div className="pro-field-group">
        <label className="pro-label">Field Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pro-input"
        />
      </div>
    </BaseNode>
  );
};