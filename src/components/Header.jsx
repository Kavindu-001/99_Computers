import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import '../style/header.css'

const Header = () => { // Example cart item count
    const userName = "John Doe"; // Example user name
  return (
    <div className='header-container'>
        <div className='header-logo'>
            <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className='header-title'>
            <h1>Welcome to 99 Computers</h1>
        </div>
        <div className='header-links'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/SignIn">Join with Us</Link>

            <div className="part-of-header"> 
                <Link to="/Cart">
                    
                    <ShoppingCartIcon />
                    
                </Link>
                <Link to="/Profile" className='user-avatar'>
                    <Avatar alt={userName} src="/images/user-avatar.png" />
                </Link>
            </div>

        </div>
      
    </div>
  )
}

export default Header
