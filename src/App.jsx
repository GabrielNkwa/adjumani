// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Modal from 'react-modal';
import Works from './pages/Works';
import Involved from './pages/Involved';
import ScrollToTop from './components/ScrollToTop';

Modal.setAppElement('#root');

const App = () => {
  return (
    <div id='root'>

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
    </div>
  );
};

export default App;
