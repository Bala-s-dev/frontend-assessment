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
            // Using localhost:8000 based on standard setup, ensure backend is running
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const result = await response.json();

            // Pretty alert for the results
            alert(
                `🚀 Pipeline Analysis Complete\n` +
                `---------------------------------\n` +
                `• Nodes: ${result.num_nodes}\n` +
                `• Edges: ${result.num_edges}\n` +
                `• Topology: ${result.is_dag ? 'Linear (DAG) ✅' : 'Cycle Detected ❌'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to connect to the analysis server. Please check if the backend is running.');
        }
    };

    return (
        <button className="btn-submit" onClick={handleSubmit}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12l5 5l10 -10" />
            </svg>
            Deploy Pipeline
        </button>
    );
};