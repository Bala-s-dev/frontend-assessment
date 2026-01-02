// frontend/src/toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const nodeGroups = [
        {
            label: 'Basic Nodes', nodes: [
                { type: 'customInput', label: 'Input' },
                { type: 'customOutput', label: 'Output' },
                { type: 'text', label: 'Text' }
            ]
        },
        {
            label: 'AI & Logic', nodes: [
                { type: 'llm', label: 'LLM Node' },
                { type: 'logic', label: 'Condition' }
            ]
        },
        {
            label: 'Utilities', nodes: [
                { type: 'timer', label: 'Wait/Timer' },
                { type: 'file', label: 'File Upload' },
                { type: 'note', label: 'Sticky Note' }
            ]
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '14px', marginBottom: '20px', color: '#64748b' }}>Components</h2>
            {nodeGroups.map((group, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', marginBottom: '12px' }}>
                        {group.label}
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                        {group.nodes.map(node => (
                            <DraggableNode key={node.type} type={node.type} label={node.label} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};