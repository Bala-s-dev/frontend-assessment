import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LogicNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Logic (If/Else)"
        handles={[
            { type: 'target', position: Position.Left, id: 'in' },
            { type: 'source', position: Position.Right, id: 'true', style: { top: '30%' } },
            { type: 'source', position: Position.Right, id: 'false', style: { top: '70%' } }
        ]}
    >
        <div className="p-2 text-xs">Branching Logic</div>
    </BaseNode>
);