import React from 'react';
import Games from './pages/Games'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
      <div>
        <header className="header">
          <h1 className="logo">Neptune Game Studios</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Games</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="/about" element={<></>} />
            <Route path="/contact" element={<></>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
