import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px', borderBottom: '1px solid #ccc' }}>
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            {/* New Nodes */}
            <DraggableNode type='logic' label='Logic' />
            <DraggableNode type='color' label='Color' />
            <DraggableNode type='note' label='Note' />
            <DraggableNode type='timer' label='Timer' />
            <DraggableNode type='file' label='File' />
        </div>
    );
};