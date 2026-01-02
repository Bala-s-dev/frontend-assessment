// frontend/src/nodes/NoteNode.js
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => (
    <BaseNode id={id} label="Sticky Note" handles={[]}>
        <textarea
            placeholder="Capture context here..."
            className="node-input nodrag"
            style={{ minHeight: '80px', background: '#fefce8', border: '1px solid #fef08a' }}
        />
    </BaseNode>
);