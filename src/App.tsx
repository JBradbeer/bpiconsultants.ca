import './App.scss';
import MobileNav from './components/Navigation/Mobile/MobileNav'; 
import DesktopNav from './components/Navigation/Desktop/DesktopNav';
// import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
      <div id='navigation'>
        <MobileNav />
        <DesktopNav />
      </div>
      <div id='content'>
        <Services />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
