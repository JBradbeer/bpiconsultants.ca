import React from 'react';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Footer from './components/Footer';

import './style.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <div id='content'>
        <Landing />
        <About />
        <Services />
        <Clients />
        <Footer />
      </div>
    </>
  )
}

export default App;