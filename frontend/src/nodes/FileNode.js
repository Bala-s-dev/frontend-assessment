// frontend/src/nodes/FileNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FileNode = ({ id }) => (
    <BaseNode
        id={id}
        label="File Source"
        icon="󰈔"
        handles={[{ type: 'source', position: Position.Right, id: 'file-out' }]}
    >
        <div className="pro-file-dropzone">
            <input type="file" className="pro-file-input" />
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Click to upload</span>
        </div>
    </BaseNode>
);