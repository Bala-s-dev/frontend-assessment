// src/nodes/textNode.js 
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(m => m[1]))];
    setVariables(uniqueVars);
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  const dynamicHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map(v => ({ type: 'target', position: Position.Left, id: v }))
  ];

  return (
    <BaseNode id={id} label="Text" handles={dynamicHandles}>
      <textarea
        ref={textAreaRef}
        value={currText}
        onChange={handleTextChange}
        className="nodrag" // Prevents dragging when typing
        style={{ width: '100%', minHeight: '40px' }}
      />
    </BaseNode>
  );
};