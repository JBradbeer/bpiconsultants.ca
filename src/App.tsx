import './App.scss';

import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <>
      <Navigation />
      <div id='content'>
        <Landing />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
