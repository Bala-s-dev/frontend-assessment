import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>;

export const NoteNode = ({ id }) => (
    <BaseNode
        id={id}
        label="Note"
        typeColor="#fbbf24"
        icon={Icon}
        handles={[]}
    >
        <textarea
            placeholder="Type your notes here..."
            className="pro-textarea nodrag"
            style={{ minHeight: '80px', background: 'transparent', border: 'none', padding: '0', boxShadow: 'none' }}
        />
    </BaseNode>
);