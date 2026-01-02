// frontend/src/nodes/LogicNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LogicNode = ({ id }) => {
    const [condition, setCondition] = useState('equals');

    return (
        <BaseNode
            id={id}
            label="Logic Branch"
            handles={[
                { type: 'target', position: Position.Left, id: 'in' },
                { type: 'source', position: Position.Right, id: 'true', style: { top: '30%', borderColor: '#22c55e' } },
                { type: 'source', position: Position.Right, id: 'false', style: { top: '70%', borderColor: '#ef4444' } }
            ]}
        >
            <div className="node-field">
                <label>Condition Type</label>
                <select className="node-select" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="equals">Equals</option>
                    <option value="contains">Contains</option>
                    <option value="greater">Greater Than</option>
                </select>
            </div>
        </BaseNode>
    );
};