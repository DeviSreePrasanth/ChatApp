import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Hero from './components/Hero';
import ChatApp from './components/ChatApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;