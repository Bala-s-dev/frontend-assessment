// Example: LogicNode.js
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LogicNode = ({ id, data }) => (
    <BaseNode
        id={id}
        label="Condition"
        handles={[
            { type: 'target', position: Position.Left, id: 'in' },
            { type: 'source', position: Position.Right, id: 'true', style: { top: '30%' } },
            { type: 'source', position: Position.Right, id: 'false', style: { top: '70%' } }
        ]}
    >
        <div className="p-2 text-xs">If/Else Logic</div>
    </BaseNode>
);