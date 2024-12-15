import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
