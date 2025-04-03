import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'

const App = () => {


  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Join with Us" element={<SignIn />} />
        </Routes>
      <Footer />
    </Router>
    
  )
}

export default App

