// frontend/src/submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const result = await response.json();

            // Part 4: Production-ready Alert
            alert(
                `🚀 Pipeline Analysis Complete\n` +
                `---------------------------------\n` +
                `• Nodes: ${result.num_nodes}\n` +
                `• Edges: ${result.num_edges}\n` +
                `• Topology: ${result.is_dag ? 'Linear (DAG) ✅' : 'Cycle Detected ❌'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to connect to the analysis server.');
        }
    };

    return (
        <button
            onClick={handleSubmit}
            className="pro-submit-btn"
            style={{
                background: 'linear-gradient(135deg, #58A6FF, #2188FF)',
                color: 'white',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'transform 0.1s ease'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            Deploy Pipeline
        </button>
    );
};