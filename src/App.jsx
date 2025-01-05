// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Involved from './pages/Involved';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/involved" element={<Involved />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
