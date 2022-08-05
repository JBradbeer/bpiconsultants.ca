import './Navigation.scss';

import { useEffect, useState } from 'react';
import DesktopNav from './Desktop/DesktopNav';
import MobileNav from './Mobile/MobileNav';

const Navigation = () => {
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
  }, []);

  return (
    <div id='navigation' className={hidden ? 'nav-bar-hidden' : 'nav-bar-not-hidden'}>
      <DesktopNav />
      {/* <MobileNav /> */}
    </div>
  );
};

export default Navigation;
