/*
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
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        <button>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
      </div>

      <ul className={`nav--list ${isOpen ? 'open' : ''}`}>
        <li className="nav--item"><a href="/homepage" className="link">Home</a> </li>
        <li className="nav--item"><a href="/homepage#About" className="link">About</a> </li>
        <li className="nav--item"><a href="/homepage#Services" className="link">Services</a> </li>
        <li className="nav--item"><a href="/homepage#Contact" className="link">Contact</a> </li>
        <li className="nav--item"><a href="/homepage/#/team" className="link">Team</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
*/

import React, { useState, useEffect } from "react";
import '../styles/Navbar.css'

const Header = ({ color }) => {
    const [ open, setOpen ] = useState(false);
    
    const toggle = () => {
        // opening closing banner
        setOpen(prev => !prev);
        console.log(open)
    }

    useEffect(() => {
        const onScroll = () => {setOpen(false)}
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

    return (
        <div className="header-container" style={{ backgroundColor: color }}>
            <div className={`links-container ${open ? "open" : ""}`}>
                  <span><a href="/homepage"> Home</a> </span>
                  <span><a href="/homepage#About"> About</a> </span>
                  <span><a href="/homepage#Services"> Services</a> </span>
                  <span><a href="/homepage#Contact"> Contact</a> </span>
                  <span><a href="/homepage/#/team"> Team</a></span>
            </div>  

            <div className="hamburger-menu" onClick={toggle}>
                <span className></span>
                <span className></span>
                <span className></span>
            </div>
        </div>
    )
}

export default Header;