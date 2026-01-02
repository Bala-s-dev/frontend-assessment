// frontend/src/nodes/TimerNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Delay Timer"
        icon="󱎫"
        handles={[
            { type: 'target', position: Position.Left, id: 'trigger' },
            { type: 'source', position: Position.Right, id: 'elapsed' }
        ]}
    >
        <div className="pro-field-group">
            <label className="pro-label">Seconds to Wait</label>
            <input type="number" defaultValue={5} className="pro-input" />
        </div>
    </BaseNode>
);