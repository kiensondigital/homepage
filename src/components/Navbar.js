import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {setIsOpen(false)}
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="logo"> KS </div>
      
      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <button>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Navigation List */}
      <ul className={`nav--list ${isOpen ? 'open' : ''}`}>
        <li className="nav--item"><a href="/kienson" className="link">Home</a> </li>
        <li className="nav--item"><a href="/kienson#About" className="link">About</a> </li>
        <li className="nav--item"><a href="/kienson#Services" className="link">Services</a> </li>
        <li className="nav--item"><a href="/kienson#Contact" className="link">Contact</a> </li>
        <li className="nav--item"><a href="/kienson/team" className="link">Team</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
