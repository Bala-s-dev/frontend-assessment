// frontend/src/nodes/llmNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;

export const LLMNode = ({ id }) => (
  <BaseNode
    id={id}
    label="LLM Engine"
    typeColor="#a78bfa"
    icon={Icon}
    handles={[
      { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
      { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
      { type: 'source', position: Position.Right, id: 'response' }
    ]}
  >
    <div className="pro-field-group">
      <div style={{ fontSize: '11px', color: 'var(--text-dim)', lineHeight: '1.4' }}>
        Processes inputs via Large Language Model API. Connect system and user prompts.
      </div>
    </div>
  </BaseNode>
);