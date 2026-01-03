// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', background: 'var(--bg-studio)', overflow: 'hidden' }}>
      <header style={{
        height: '64px', padding: '0 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid var(--border-main)',
        background: 'rgba(11, 14, 20, 0.8)', backdropFilter: 'blur(12px)', zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }} />
          <h1 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
            VectorShift <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Studio</span>
          </h1>
        </div>
        <SubmitButton />
      </header>

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Responsive Sidebar */}
        <aside style={{
          width: 'clamp(240px, 20vw, 320px)',
          borderRight: '1px solid var(--border-main)',
          padding: '24px',
          overflowY: 'auto',
          background: 'var(--bg-studio)'
        }}>
          <PipelineToolbar />
        </aside>

        {/* Main Canvas Area */}
        <main style={{ flex: 1, position: 'relative', height: '100%', width: '100%' }}>
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}

export default App;