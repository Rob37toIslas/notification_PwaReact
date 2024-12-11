// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import '../src/index.css'

import Home from './screens/home';
import Login from './screens/login';
import Services from './screens/services';

const App = () => {
  return (
    <Router>    
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  );
};

export default App;

