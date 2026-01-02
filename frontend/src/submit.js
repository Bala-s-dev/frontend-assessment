import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const result = await response.json();

            alert(
                `Pipeline Summary:\n` +
                `- Nodes: ${result.num_nodes}\n` +
                `- Edges: ${result.num_edges}\n` +
                `- Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Submission failed:', error);
            alert('Error submitting pipeline. Ensure backend is running.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <button
                onClick={handleSubmit}
                className="submit-btn"
            >
                Submit Pipeline
            </button>
        </div>
    );
};