import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const Icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M13 2v7h7" /></svg>;

export const FileNode = ({ id }) => (
    <BaseNode
        id={id}
        label="File"
        typeColor="#8b5cf6"
        icon={Icon}
        handles={[{ type: 'source', position: Position.Right, id: 'file' }]}
    >
        <div style={{
            border: '1px dashed var(--border-main)',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center',
            background: 'var(--bg-input)'
        }}>
            <input type="file" style={{ fontSize: '10px', width: '100%', color: 'var(--text-secondary)' }} />
        </div>
    </BaseNode>
);