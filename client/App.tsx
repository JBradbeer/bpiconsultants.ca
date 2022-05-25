import React from 'react';

import Landing from './components/Landing'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

import './style.scss';

const App = () => {
  return (
  <>
    <div id='content'>
      <Landing />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  </>)
}

export default App;