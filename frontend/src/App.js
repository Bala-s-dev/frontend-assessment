// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit'; // Ensure this points to src/submit.js

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg-studio)' }}>
      <header style={{
        height: '56px', padding: '0 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid var(--border-main)',
        background: 'rgba(11, 14, 20, 0.8)', backdropFilter: 'blur(12px)', zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg, #58A6FF, #2188FF)' }} />
          <h1 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
            VectorShift <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Studio</span>
          </h1>
        </div>
        <SubmitButton />
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <aside style={{ width: '280px', borderRight: '1px solid var(--border-main)', padding: '24px', overflowY: 'auto' }}>
          <PipelineToolbar />
        </aside>
        <main style={{ flex: 1, position: 'relative' }}>
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}

export default App;