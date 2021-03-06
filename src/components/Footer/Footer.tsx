import './Footer.scss';


const Footer = () => {
  return (
    <footer>
      <h1>BPI Consultants</h1>

      <div id='footer-content'>
        {/* OVERVIEW*/}
        <div id='footer-overview' className='footer-content-box'>
          <h3>BPI Consultants is a boutique consulting company specializing in advisory and management services for the real estate and construction sectors.</h3>
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
          <div id='footer-socials-logos'>
            <a 
              href='https://www.linkedin.com/company/bpi-consultants/'
              target='_blank' rel='noopener noreferrer'
            >
              <img src='https://www.nicepng.com/png/full/375-3755097_join-the-conversation-linkedin-logo-white-png-transparent.png'/>
            </a>
            <a 
              href='https://www.facebook.com/bpiconsultants.ca/'
              target='_blank' rel='noopener noreferrer'
            >
              <img src='https://nrgteleresources.com/wp-content/uploads/facebook-logo-white.png'/>
            </a>
          </div>
        </div>
      </div>

      <hr className="solid" />
      
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
  )
}

export default Footer;