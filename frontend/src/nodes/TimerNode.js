import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Timer (Delay)"
        handles={[{ type: 'source', position: Position.Right, id: 'out' }]}
    >
        <label className="node-input-label">Duration (ms)</label>
        <input type="number" className="node-input" defaultValue={1000} />
    </BaseNode>
);