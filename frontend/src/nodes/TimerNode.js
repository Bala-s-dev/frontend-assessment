// frontend/src/nodes/TimerNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Delay Timer"
        handles={[
            { type: 'target', position: Position.Left, id: 'trigger' },
            { type: 'source', position: Position.Right, id: 'elapsed' }
        ]}
    >
        <div className="node-field">
            <label>Delay (seconds)</label>
            <input type="number" defaultValue={5} className="node-input" />
        </div>
    </BaseNode>
);