// frontend/src/nodes/llmNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <BaseNode id={id} label="LLM Engine" typeColor="#8b5cf6" handles={handles}>
      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', padding: '10px 0' }}>
        This is a standard Large Language Model node.
      </div>
    </BaseNode>
  );
};