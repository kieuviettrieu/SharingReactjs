import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import CounterPage from './pages/CounterPage.jsx';
import StateFlow from './pages/StateFlow.jsx';
import StateBatching from './pages/StateBatching.jsx';
import ManualDom from './pages/ManualDom.jsx';
import Components from './pages/Components.jsx';
import About from './pages/About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/state-flow" element={<StateFlow />} />
        <Route path="/state-batching" element={<StateBatching />} />
        <Route path="/manual-dom" element={<ManualDom />} />
        <Route path="/components" element={<Components />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
    </Router>
  );
}

export default App;

