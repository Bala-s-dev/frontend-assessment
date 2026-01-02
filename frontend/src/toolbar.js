// frontend/src/toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const categories = [
    { name: 'Core', items: [['customInput', 'Input'], ['customOutput', 'Output'], ['text', 'Text Editor']] },
    { name: 'Intelligence', items: [['llm', 'LLM Engine']] },
    { name: 'Utilities', items: [['logic', 'Logic Branch'], ['timer', 'Timer'], ['note', 'Note'], ['file', 'File Upload'], ['color', 'Color Picker']] }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>COMPONENTS</h2>
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>{cat.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {cat.items.map(([type, label]) => (
              <DraggableNode key={type} type={type} label={label} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};