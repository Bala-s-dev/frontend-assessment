// frontend/src/nodes/textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input_data}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Requirement: Detect {{ variable }} and create dynamic handles
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)].map(match => match[1]);
    setVariables([...new Set(matches)]);
  }, [currText]);

  // Requirement: Adjust width/height as user enters more text
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.max(60, textAreaRef.current.scrollHeight)}px`;
    }
  }, [currText]);

  const dynamicHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode id={id} label="Text Editor" handles={dynamicHandles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="nodrag"
          style={{
            background: 'transparent', border: 'none', color: 'var(--text-primary)',
            fontSize: '13px', fontFamily: '"JetBrains Mono", monospace', resize: 'none', outline: 'none',
            minWidth: '200px'
          }}
        />
      </div>
    </BaseNode>
  );
};