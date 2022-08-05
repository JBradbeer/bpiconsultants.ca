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
      <div id='m-nav-topbar'>
        <div id='m-nav-logo'>
          <svg
            cache-id='bcca707f022949eeb3c0afd0113a2537'
            id='eV6r48seu3j1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 250 200'
            shape-rendering='geometricPrecision'
            text-rendering='geometricPrecision'
          >
            <rect width='50' height='50' rx='0' ry='0' fill='#555' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(150 0)' fill='#95b3d7' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(50 50)' fill='#c3d59b' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(200 150)' fill='#c3d59b' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(150 150)' fill='#95b3d7' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(200 100)' fill='#555' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(150 100)' fill='#948a54' stroke-width='0' />
            <rect width='50' height='50' rx='0' ry='0' transform='translate(0 100)' fill='#948a54' stroke-width='0' />
          </svg>
          <h2>BPI</h2>
        </div>
        <BurgerMenu menuOnClick={menuOnClick} />
      </div>
      <div id='m-nav-dropdown' className={isOpen ? '' : 'hidden'}>
        <ul id='m-nav-links'>
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
        </ul>
        <ul id='m-nav-socials'>
          <li>
            <a
              className='facebook'
              href='https://www.facebook.com/bpiconsultants.ca/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              className='linkedin'
              href='https://www.linkedin.com/company/bpi-consultants/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
