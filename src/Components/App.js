import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Skills from './Skills';
import Nav from './Nav';
import Demos from './Demos';
import './App.css';

function App() {
  const [selected, setSelected] = useState('About');

  const handleSelection = (newSelection) => {
    setSelected(newSelection);
  };

  return (
    <Router>
      <div className="App">
      <Nav selected={selected} handleSelection={handleSelection} />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/qr" element={<Navigate to="/" />} /> {/* Redirect to the homepage */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
