import './App.css';

import React from 'react';
import Hero from './components/Hero';
import DescriptionBlocks from './components/Description'
import Services from './components/Services';
import Contact from './components/Contact';
import Contactform from './components/Message';
import Footer from './components/Footer';

import CompanyInfo from './components/Company';
import Profile from './components/Profile';

import MouseFollowCircle from './components/mouse';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

const Home = () => {
  return (
    <div>
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
      <CompanyInfo />
      <Profile />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
        <MouseFollowCircle />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/team' element={<Team />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}


export default App;
