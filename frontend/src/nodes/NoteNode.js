// frontend/src/nodes/NoteNode.js
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => (
    <BaseNode id={id} label="Developer Note" icon="󰠮" handles={[]}>
        <textarea
            placeholder="Add context or TODOs..."
            className="pro-textarea nodrag"
            style={{
                minHeight: '100px',
                background: '#1C2128',
                border: '1px solid #444C56',
                color: '#ADBAC7'
            }}
        />
    </BaseNode>
);