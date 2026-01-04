// frontend/src/nodes/inputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Consistent icon with Toolbar
const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>;

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace('customInput-', 'in_'));
  const [type, setType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      label="Input"
      typeColor="#10b981"
      icon={Icon}
      handles={[{ type: 'source', position: Position.Right, id: 'value' }]}
    >
      <div className="pro-field-group">
        <label className="pro-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pro-input"
        />
      </div>
      <div className="pro-field-group">
        <label className="pro-label">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="pro-select"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};