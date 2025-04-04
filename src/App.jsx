import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp'; // Add this import

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;