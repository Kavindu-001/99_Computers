import React from 'react';
import '../style/Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import social media icons from Material-UI
import '../style/footer.css'; // Import the CSS file for styling
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section about">
        <h3>About Us</h3>
        <p>
          99 Computers is your one-stop solution for all computer needs. We offer a wide range of products, services, and support to ensure your devices run smoothly.
        </p>
      </div>
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/SignUp">Join with Us</Link></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: support@99computers.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Tech Street, Silicon Valley, CA</p>
      </div>
      <div className="footer-section social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

