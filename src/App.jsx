import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/sample-web-photo">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
