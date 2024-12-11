// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './screens/home';
import Login from './screens/login';
import Services from './screens/services';

const App = () => {
  return (
    <Router>    
       <Navbar />
     <div style={{ margin: '-10px', padding: 0 }}>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Login />} />
          <Route path="/contact" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

