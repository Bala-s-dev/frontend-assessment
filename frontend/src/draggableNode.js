// frontend/src/draggableNode.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const DraggableNode = ({ type, label, icon }) => {
  // Connect to store to allow "Click to Add" functionality
  const { getNodeID, addNode } = useStore((state) => ({
    getNodeID: state.getNodeID,
    addNode: state.addNode,
  }), shallow);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  // New handler for Mobile/Click support
  const onClick = () => {
    const id = getNodeID(type);
    const newNode = {
      id,
      type,
      position: { x: 250, y: 250 }, // Default position near center-top
      data: {
        id,
        nodeType: `${type}`,
        description: '' // Ensure new field is initialized
      },
    };
    addNode(newNode);
  };

  return (
    <div
      className={`draggable-studio-tile ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      onClick={onClick} // Enable "Tap to Add"
      draggable
    >
      <div className="tile-icon" style={{ display: 'flex' }}>
        {icon}
      </div>
      <span className="tile-label">{label}</span>
    </div>
  );
};