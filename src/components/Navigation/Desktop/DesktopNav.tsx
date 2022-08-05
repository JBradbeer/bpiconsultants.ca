import './DesktopNav.scss';

const DesktopNav = () => {
  return (
    <div id='desktop-navbar'>
      {/* BPI LOGO */}
      <div id='d-nav-logo'>
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
      {/* NAV LINKS */}
      <nav id='d-nav-links' className='stroke'>
        <ul>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#services'>SERVICES</a>
          </li>
          <li>
            <a href='#projects'>PROJECTS</a>
          </li>
          <li>
            <a href='#testimonials'>TESTIMONIALS</a>
          </li>
          <li>
            <a href='#clients'>CLIENTS</a>
          </li>
        </ul>
      </nav>
      {/* SOCIALS */}
      <ul id='d-nav-socials'>
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
  );
};

export default DesktopNav;
