import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing the best services and products to our customers.
            Our mission is to improve lives through quality and innovation.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: KienSon.Digital@gmail.com</p>
          <p>Phone: +43 677 611 25982 </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KienSon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
