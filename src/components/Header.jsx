import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../style/header.css';

const Header = () => {
  const userName = "John Doe"; // Example user name

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className="header-title">
        <Typography variant="h4" component="h1">
          Welcome to 99 Computers
        </Typography>
      </div>

      <div className="header-links">
        <Link to="/" className="header-link">
          <Button variant="text" color="inherit">Home</Button>
        </Link>
        <Link to="/About" className="header-link">
          <Button variant="text" color="inherit">About</Button>
        </Link>
        <Link to="/Contact" className="header-link">
          <Button variant="text" color="inherit">Contact</Button>
        </Link>
        <Link to="/SignUp" className="header-link">
          <Button variant="contained" color="primary">Join with Us</Button>
        </Link>

        <div className="part-of-header">
          <Link to="/Cart" className="cart-icon">
            <ShoppingCartIcon />
          </Link>
          <Link to="/Profile" className="user-avatar">
            <Avatar alt={userName} src="/images/user-avatar.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
