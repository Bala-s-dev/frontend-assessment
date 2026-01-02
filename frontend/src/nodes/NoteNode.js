import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => (
    <BaseNode id={id} label="Note" handles={[]}>
        <textarea
            placeholder="Type a note..."
            className="nodrag node-input"
            defaultValue={data?.text}
            style={{ minHeight: '60px' }}
        />
    </BaseNode>
);