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
            icon="󱓟"
            handles={[
                { type: 'target', position: Position.Left, id: 'in' },
                { type: 'source', position: Position.Right, id: 'true', style: { top: '30%', borderColor: '#3FB950' } },
                { type: 'source', position: Position.Right, id: 'false', style: { top: '70%', borderColor: '#F85149' } }
            ]}
        >
            <div className="pro-field-group">
                <label className="pro-label">Operator</label>
                <select className="pro-select" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="equals">Is Equal To</option>
                    <option value="contains">Contains String</option>
                    <option value="greater">Greater Than</option>
                </select>
            </div>
        </BaseNode>
    );
};