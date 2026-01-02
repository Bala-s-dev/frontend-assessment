// frontend/src/nodes/BaseNode.js
import { Handle } from 'reactflow';
import './nodes.css';

export const BaseNode = ({ id, label, children, handles = [], typeColor = '#58a6ff', icon }) => {
  return (
    <div className="node-container">
      {/* Visual Identity Accent */}
      <div className="node-accent-bar" style={{ background: typeColor }} />

      <div className="node-header">
        <div className="node-header-left">
          {icon && <span className="node-type-icon" style={{ color: typeColor }}>{icon}</span>}
          <span className="node-label">{label}</span>
        </div>
        <div className="node-status-indicator" style={{ background: typeColor, boxShadow: `0 0 8px ${typeColor}` }} />
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
          className="pro-handle"
        />
      ))}
    </div>
  );
};