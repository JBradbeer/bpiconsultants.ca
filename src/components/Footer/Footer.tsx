import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div id='footer-logo'>
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
        <h3>BPI Consultants</h3>
      </div>

      <div id='footer-content'>
        {/* OVERVIEW*/}
        <div id='footer-overview' className='footer-content-box'>
          <h3>
            BPI Consultants is a boutique consulting company specializing in advisory and management services for the
            real estate and construction sectors.
          </h3>
        </div>

        {/* CONTACT INFO */}
        <div id='footer-contact' className='footer-content-box'>
          <h3>Contact Us</h3>
          <p>info@bpiconsultants.ca</p>
          <p>416-432-5432</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div id='footer-socials' className='footer-content-box'>
          <h3>Follow Us</h3>
          <ul>
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

      <hr className='solid' />

      {/* FOOTER META */}
      <div id='footer-meta'>
        <p>© 2022 BPI Consultants, Inc. All rights reserved.</p>
        <div id='jake-signoff'>
          <p>Website by Jake Bradbeer</p>
          <p>|</p>
          <a href='https://github.com/JBradbeer' target='_blank' rel='noopener noreferrer'>
            <p>GitHub</p>
          </a>
          <p>|</p>
          <a href='https://www.linkedin.com/in/jacobbradbeer/' target='_blank' rel='noopener noreferrer'>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
