import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//import pages
import Home from './pages/Home';
import World from './pages/World';
import Politics from './pages/Politics';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
//import components
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
