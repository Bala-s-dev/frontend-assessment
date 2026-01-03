// frontend/src/nodes/BaseNode.js
import { Handle } from 'reactflow';
import './nodes.css';

export const BaseNode = ({ id, label, children, handles = [], typeColor = '#6366f1', icon }) => {
  return (
    <div className="node-container">
      <div className="node-header">
        <div className="node-header-left">
          {icon && <span style={{ color: typeColor, display: 'flex' }}>{icon}</span>}
          <span className="node-label">{label}</span>
        </div>
        {/* Visual Pulse Indicator */}
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: typeColor, boxShadow: `0 0 10px ${typeColor}`
        }} />
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