// frontend/src/toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const categories = [
    {
      name: 'Core',
      items: [
        ['customInput', 'Input', '󰈔'],
        ['customOutput', 'Output', '󰈔'],
        ['text', 'Text Editor', '󰄷']
      ]
    },
    {
      name: 'Intelligence',
      items: [
        ['llm', 'LLM Engine', '󰚩']
      ]
    },
    {
      name: 'Utilities',
      items: [
        ['logic', 'Logic Branch', '󱓟'],
        ['timer', 'Timer', '󱎫'],
        ['note', 'Note', '󰠮'],
        ['file', 'File Upload', '󰈔'],
        ['color', 'Color Picker', '󰏘']
      ]
    }
  ];

  return (
    <div className="studio-toolbar">
      <h2 className="toolbar-main-title">Components</h2>
      {categories.map(cat => (
        <div key={cat.name} className="toolbar-category">
          <h3 className="toolbar-category-title">{cat.name}</h3>
          <div className="toolbar-grid">
            {cat.items.map(([type, label, icon]) => (
              <DraggableNode key={type} type={type} label={label} icon={icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};