// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add other pages here like About, Admissions, etc. */}
      </Routes>
    </div>
  );
}

export default App;
