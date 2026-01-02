// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Top Navigation Bar */}
      <header style={{
        height: '60px',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-light)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px' }} />
          <h1 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
            VectorShift <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Workflow</span>
          </h1>
        </div>
        <SubmitButton />
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Component Sidebar */}
        <aside style={{
          width: '280px',
          background: 'var(--bg-surface)',
          borderRight: '1px solid var(--border-light)',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <PipelineToolbar />
        </aside>

        {/* Main Canvas */}
        <main style={{ flex: 1, position: 'relative' }}>
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}

export default App;