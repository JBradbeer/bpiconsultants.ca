import 
  React, 
  { useEffect, 
    useState } 
    from 'react';

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
      <div className='logo'>
        <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQH5IaPdi44ymA/company-logo_200_200/0/1596762696687?e=1661990400&v=beta&t=m6cxcNKkMhrCP6T6zp6XN36bpEyLIpG1t-enpDcTiRg'/>
        <div className='logo-text'>
          <h1>BPI</h1>
        </div>
      </div>
      {/* NAV LINKS */}
      <ul>
        <li><a href='#about'>ABOUT US</a></li>
        <li><a href='#services'>OUR SERVICES</a></li>
        <li><a href='#projects'>SELECT PROJECTS</a></li>
        <li><a href='#clients'>OUR CLIENTS</a></li>
        <div className='socials'>
          <a 
            href='https://www.linkedin.com/company/bpi-consultants/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png'/>
          </a>
          <a 
            href='https://www.facebook.com/bpiconsultants.ca/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <img src='https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png'/>
          </a>
        </div>    
      </ul>
    </div>
  );
}
