import 
  React, 
  { useEffect, 
    useState } 
    from 'react';
// import BPILogo from '../images/bpilogo.png';
// const BPILogo = require('../images/bpilogo.png');

export default function NavBar() {
  let [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    // if user scrolls up show nav bar, if user scrolls down hide nav bar
    window.addEventListener('scroll', function () {
      if (lastScrollY > window.scrollY) setHidden(false);
      else setHidden(true);

      // reset the position of the last y value
      lastScrollY = window.scrollY;
    });
  }, [])
  


  return (
    <div id='nav-bar' className={hidden ? 'nav-bar-hidden' : 'nav-bar-not-hidden'}>
      {/* BPI LOGO */}
      <div>
        {/* <img src={BPILogo} alt="Logo" /> */}
        <p>BPI LOGO</p>
      </div>

      {/* NAV LINKS */}
      <ul>
        <li><a href='#about-us'>ABOUT US</a></li>
        <li><a href='#services'>OUR SERVICES</a></li>
        <li><a href='#projects'>OUR PROJECTS</a></li>
        <li><a href='#clients'>OUR CLIENTS</a></li>
        <li><a href='#contact'>CONTACT US</a></li>
      </ul>
    </div>
  );
}
