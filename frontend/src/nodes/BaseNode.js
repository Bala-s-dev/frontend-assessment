// frontend/src/nodes/BaseNode.js
import { Handle } from 'reactflow';
import './nodes.css';

export const BaseNode = ({ id, label, children, handles = [], icon, selected }) => {
  return (
    <div className={`pro-node-container ${selected ? 'selected' : ''}`}>
      <div className="pro-node-header">
        <div className="header-left">
          {icon && <span className="node-icon">{icon}</span>}
          <span className="node-label">{label}</span>
        </div>
        <div className="status-dot" />
      </div>
      <div className="pro-node-content">
        {children}
      </div>
      {handles.map((h, idx) => (
        <Handle
          key={`${id}-${h.id || idx}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          className="pro-handle"
          style={{ ...h.style }}
        />
      ))}
    </div>
  );
};