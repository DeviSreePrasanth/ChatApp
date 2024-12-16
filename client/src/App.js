import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Hero from './components/Hero';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/UserProfile" element={<UserProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
