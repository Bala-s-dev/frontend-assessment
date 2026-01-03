import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
const Icon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;

export const ColorNode = ({ id, data }) => {
  const [col, setCol] = useState(data?.color || '#6366f1');
  return (
    <BaseNode id={id} label="Theme" typeColor="#f472b6" icon={Icon} handles={[{ type: 'source', position: Position.Right, id: 'out' }]}><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="color" value={col} onChange={(e) => setCol(e.target.value)} style={{ border: 'none', background: 'none', cursor: 'pointer' }} /><code>{col}</code></div></BaseNode>
  );
}