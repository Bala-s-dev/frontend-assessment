import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Timer (Delay)"
        handles={[
            { type: 'target', position: Position.Left, id: 'in' },
            { type: 'source', position: Position.Right, id: 'out' }
        ]}
    >
        <label className="node-input-label">Wait (ms)</label>
        <input type="number" className="node-input" defaultValue={1000} />
    </BaseNode>
);