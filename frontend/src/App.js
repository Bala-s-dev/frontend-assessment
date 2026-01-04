// frontend/src/App.js
import { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          <div className="brand-logo" />
          <h1 className="brand-text">
            VectorShift <span>Studio</span>
          </h1>
        </div>

        <SubmitButton />
      </header>

      {/* Sidebar (Responsive Drawer) */}
      <aside className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <PipelineToolbar />
      </aside>

      {/* Main Canvas */}
      <main className="app-main">
        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="sidebar-overlay visible"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <PipelineUI />
      </main>
    </div>
  );
}

export default App;