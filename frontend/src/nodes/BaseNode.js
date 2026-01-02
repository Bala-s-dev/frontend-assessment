import { Handle, Position } from 'reactflow';
import './node.css';

export const BaseNode = ({ id, label, children, handles = [] }) => {
    return (
        <div className="node-wrapper">
            <div className="node-header">
                <span className="node-label">{label}</span>
            </div>
            <div className="node-body">
                {children}
            </div>
            {handles.map((handle, index) => (
                <Handle
                    key={`${id}-handle-${index}`}
                    type={handle.type} 
                    position={handle.position}
                    id={`${id}-${handle.id}`}
                    style={{
                        background: '#555',
                        width: '8px',
                        height: '8px',
                        ...handle.style
                    }}
                />
            ))}
        </div>
    );
};