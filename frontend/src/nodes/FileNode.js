import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FileNode = ({ id }) => (
    <BaseNode
        id={id}
        label="File Input"
        handles={[{ type: 'source', position: Position.Right, id: 'file-out' }]}
    >
        <label className="node-input-label">Upload File</label>
        <input type="file" className="node-input" style={{ fontSize: '10px' }} />
    </BaseNode>
);