// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header Area */}
      <header style={{
        padding: '12px 24px',
        borderBottom: '1px solid #e2e8f0',
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#6366f1' }}>
          VectorShift <span style={{ color: '#94a3b8', fontWeight: 400 }}>| Workflow Builder</span>
        </h1>
        <SubmitButton />
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar Toolbar */}
        <aside style={{
          width: '260px',
          borderRight: '1px solid #e2e8f0',
          background: '#fff',
          zIndex: 10
        }}>
          <PipelineToolbar />
        </aside>

        {/* Canvas Area */}
        <main style={{ flex: 1, position: 'relative' }}>
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}

export default App;