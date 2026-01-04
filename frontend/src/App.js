// frontend/src/App.js
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-logo" />
          <h1 className="brand-text">
            VectorShift <span>Studio</span>
          </h1>
        </div>
        <SubmitButton />
      </header>

      {/* Sidebar: Responsive (Full on Desktop, Icons on Mobile) */}
      <aside className="app-sidebar">
        <PipelineToolbar />
      </aside>

      {/* Main Canvas */}
      <main className="app-main">
        <PipelineUI />
      </main>
    </div>
  );
}

export default App;