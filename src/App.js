import './App.css';

import React from 'react';
import Hero from './components/Hero';
import DescriptionBlocks from './components/Description'
import Services from './components/Services';
import Contact from './components/Contact';
import Contactform from './components/Message';
import Footer from './components/Footer';

import Navbar from './components/Navbar'

import CompanyInfo from './components/Company';
import Profile from './components/Profile';

import MouseFollowCircle from './components/mouse';

import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';

const Home = () => {
  return (
    <div>
      <Navbar color="black"/>
      <Hero />
      <DescriptionBlocks />
      <Services />
      <Contact />
      <Contactform />
    </div>
  );
}

const Team = () => {
  return (
    <div>
      <Navbar color="rgb(34, 49, 61)"/>
      <CompanyInfo />
      <Profile />
    </div>
  )
}


const App = () => {
  return (
    <HashRouter>
        <MouseFollowCircle />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/team' element={<Team />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}


export default App;
