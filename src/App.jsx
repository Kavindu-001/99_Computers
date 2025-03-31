import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Forgotpassword from './pages/Forgotpassword'
const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path ="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </Router>
  )
}

export default App

