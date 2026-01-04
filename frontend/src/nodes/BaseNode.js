// frontend/src/nodes/BaseNode.js
import { Handle } from 'reactflow';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import './nodes.css';

// Selector to get specific node data and the update function
const nodeSelector = (id) => (state) => ({
  description: state.nodes.find((n) => n.id === id)?.data?.description || '',
  updateNodeField: state.updateNodeField,
});

export const BaseNode = ({ id, label, children, handles = [], typeColor = '#6366f1', icon, selected }) => {
  // Connect to store for the description field
  const { description, updateNodeField } = useStore(nodeSelector(id), shallow);

  const handleDescriptionChange = (e) => {
    updateNodeField(id, 'description', e.target.value);
  };

  return (
    <div className={`node-container ${selected ? 'selected' : ''}`}>
      {/* Node Header */}
      <div className="node-header">
        <div className="node-header-left">
          {icon && <div className="node-icon" style={{ color: typeColor }}>{icon}</div>}
          <span className="node-label">{label}</span>
        </div>
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: typeColor, boxShadow: `0 0 8px ${typeColor}`
        }} />
      </div>

      {/* Node Body */}
      <div className="node-content">
        {children}

        {/* New Global Field: Description */}
        <div className="pro-field-group description-section">
          <label className="pro-label">Description</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="pro-textarea description-input nodrag"
            placeholder="Description..."
          />
        </div>
      </div>

      {/* Handles */}
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