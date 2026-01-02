import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => (
    <BaseNode id={id} label="Note" handles={[]}>
        <label className="node-input-label">Content</label>
        <textarea
            placeholder="Capture thoughts..."
            className="nodrag node-input"
            defaultValue={data?.text}
            style={{ minHeight: '60px', resize: 'vertical' }}
        />
    </BaseNode>
);