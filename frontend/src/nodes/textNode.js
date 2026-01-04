// frontend/src/nodes/textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [vars, setVars] = useState([]);
  const areaRef = useRef(null);

  // Extract variables enclosed in {{ }}
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map(m => m[1]);
    setVars([...new Set(matches)]);
  }, [text]);

  // Dynamic height adjustment
  useEffect(() => {
    if (areaRef.current) {
      areaRef.current.style.height = 'auto';
      areaRef.current.style.height = `${areaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handles = [
    { type: 'source', position: Position.Right, id: 'out' },
    ...vars.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * (100 / (vars.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode
      id={id}
      label="Text"
      typeColor="#60a5fa"
      icon={Icon}
      handles={handles}
    >
      <div className="pro-field-group">
        <label className="pro-label">Template</label>
        <textarea
          ref={areaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="pro-textarea nodrag"
          style={{ fontFamily: 'monospace', minHeight: '60px' }}
        />
      </div>
    </BaseNode>
  );
};