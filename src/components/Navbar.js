import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
      <nav class="nav">
        <div class="logo"> KS </div>
        <ul class="nav--list" data-state="closed">
            <li class="nav--item"><a href="/" class="link">Home</a> </li>
            <li class="nav--item"><a href="/#About" class="link">About</a> </li>
            <li class="nav--item"><a href="/#Services" class="link">Services</a> </li>
            <li class="nav--item"><a href="/#Contact" class="link">Contact</a> </li>
            <li class="nav--item"><a href="/team" class="link">Team</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;