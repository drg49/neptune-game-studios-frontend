import Games from './pages/Games';
import Media from './pages/Media';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import About from './pages/About';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="header">
        <h1 className="logo">Neptune Game Studios</h1>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Games
          </Link>
          <Link
            to="/media"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
