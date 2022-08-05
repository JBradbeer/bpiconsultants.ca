import './Landing.scss';
import gbIntLounge from './images/gb-int-lounge.jpeg';

const Landing = () => {
  return (
    <section id='landing'>
      <div className='cover'>
        <h2 id='landing-title'>REAL ESTATE DEVELOPMENT ADVISORY</h2>
        <h3>
          BPI Consultants is a boutique consulting company specializing in advisory and management services for the
          real estate and construction sectors.
        </h3>
        <button>
          Contact Us
        </button>
      </div>
      <img src={gbIntLounge} alt='background'/>
    </section>
  );
}

export default Landing;