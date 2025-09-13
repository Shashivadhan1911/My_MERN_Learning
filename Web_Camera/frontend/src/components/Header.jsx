import './Header.css'

function Header({ currentView, onSwitchView }) {
  return (
    <header className="app-header">
      <h1 className="app-heading">Webcam Image Upload</h1>
      <nav className="navigation">
        <button
          className={currentView === 'capture' ? 'active' : ''}
          onClick={() => onSwitchView('capture')}
        >
          Capture
        </button>
        <button
          className={currentView === 'gallery' ? 'active' : ''}
          onClick={() => onSwitchView('gallery')}
        >
          Gallery
        </button>
      </nav>
    </header>
  )
}

export default Header
