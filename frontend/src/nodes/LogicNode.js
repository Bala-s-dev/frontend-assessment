// frontend/src/nodes/LogicNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>;

export const LogicNode = ({ id }) => {
    const [op, setOp] = useState('equals');
    return (
        <BaseNode
            id={id}
            label="Logic"
            typeColor="#38bdf8"
            icon={Icon}
            handles={[
                { type: 'target', position: Position.Left, id: 'in' },
                { type: 'source', position: Position.Right, id: 'true', style: { top: '30%' } },
                { type: 'source', position: Position.Right, id: 'false', style: { top: '70%' } }
            ]}
        >
            <div className="pro-field-group">
                <label className="pro-label">Condition</label>
                <select className="pro-select" value={op} onChange={(e) => setOp(e.target.value)}>
                    <option value="equals">Equals</option>
                    <option value="contains">Contains</option>
                    <option value="gt">Greater Than</option>
                    <option value="lt">Less Than</option>
                </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-dim)', marginTop: '4px' }}>
                <span>IF TRUE</span>
                <span>IF FALSE</span>
            </div>
        </BaseNode>
    );
};