// src/nodes/BaseNode.js
import { Handle, Position } from 'reactflow';
import './nodes.css'; // Standardized styles

export const BaseNode = ({ id, label, children, handles = [] }) => {
    return (
        <div className="node-container">
            <div className="node-header">
                <span className="node-title">{label}</span>
            </div>
            <div className="node-content">
                {children}
            </div>
            {handles.map((h, idx) => (
                <Handle
                    key={`${id}-${h.id || idx}`}
                    type={h.type}
                    position={h.position}
                    id={`${id}-${h.id}`}
                    style={{ ...h.style }}
                    className="node-handle"
                />
            ))}
        </div>
    );
};