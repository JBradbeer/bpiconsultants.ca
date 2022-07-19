import './MobileNav.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuOnClick = () => {
    // find the burger meny on the DOM
    const burgerMenu = document.getElementById('nav-icon3') as HTMLElement;
    // if menu is open, remove open class
    if (isOpen) burgerMenu.classList.remove('open');
    // if menu is closed, add an open class
    else burgerMenu.classList.add('open');
    // update local open state
    setIsOpen(!isOpen);
  };

  return (
    <div id='mobile-navbar'>
      <div id='mobile-topbar'>
        <div className='logo'>
          <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQH5IaPdi44ymA/company-logo_200_200/0/1596762696687?e=1661990400&v=beta&t=m6cxcNKkMhrCP6T6zp6XN36bpEyLIpG1t-enpDcTiRg' />
          <div className='logo-text'>
            <h1>BPI</h1>
          </div>
        </div>
        <BurgerMenu menuOnClick={menuOnClick} />
      </div>
      <div id='mobile-dropdown' className={isOpen ? '' : 'hidden'}>
        <ul>
          <div id='mobile-nav-links'>
            <li>
              <a href='#about' onClick={menuOnClick}>
                ABOUT
              </a>
            </li>
            <li>
              <a href='#services' onClick={menuOnClick}>
                SERVICES
              </a>
            </li>
            <li>
              <a href='#projects' onClick={menuOnClick}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href='#testimonials' onClick={menuOnClick}>
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a href='#clients' onClick={menuOnClick}>
                CLIENTS
              </a>
            </li>
          </div>
          <div className='socials'>
            <a className='linkedin' href='https://www.linkedin.com/company/bpi-consultants/' target='_blank' rel='noopener noreferrer'>
              <img src='https://www.nicepng.com/png/full/375-3755097_join-the-conversation-linkedin-logo-white-png-transparent.png' />
            </a>
            <a className='facebook' href='https://www.facebook.com/bpiconsultants.ca/' target='_blank' rel='noopener noreferrer'>
              <img src='https://nrgteleresources.com/wp-content/uploads/facebook-logo-white.png' />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
