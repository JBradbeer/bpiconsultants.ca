import React from 'react';

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

import './style.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <div id='content'>
        <Landing />
        <AboutUs />
        <Services />
        <ContactUs />
      </div>
    </>
  )
}

export default App;