import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import LoginSignup from './Authentication/LoginSignup.jsx';
import Connect from './components/Connect.jsx';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
