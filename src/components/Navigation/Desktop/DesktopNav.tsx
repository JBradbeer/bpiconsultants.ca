import './DesktopNav.scss';

const DesktopNav = () => {
  return (
    <div id='desktop-navbar'>
      {/* BPI LOGO */}
      <div id='d-nav-logo'>
        <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQH5IaPdi44ymA/company-logo_200_200/0/1596762696687?e=1661990400&v=beta&t=m6cxcNKkMhrCP6T6zp6XN36bpEyLIpG1t-enpDcTiRg' />
        <div className='logo-text'>
          <h1>BPI</h1>
        </div>
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
          <a className='facebook' href='https://www.facebook.com/bpiconsultants.ca/' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li>
          <a className='linkedin' href='https://www.linkedin.com/company/bpi-consultants/' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
