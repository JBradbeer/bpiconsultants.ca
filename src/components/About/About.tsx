import './About.scss';
import KeyFacts from './KeyFacts/KeyFacts';

const About = () => {
  return (
    <section id='about'>
      <h2 className='content-header'> WHO WE ARE </h2>
      <div id='main-about'>
        <KeyFacts />
        <p>
          BPI Consultants provides development management services. The company’s principal is J. David Bradbeer,
          P.Eng., MBA. David has over 30 years experience in various branches of real estate and experience in all
          sectors of real estate including commercial, medical, industrial, institutional, residential, retail, LEED and
          P3’s.
          <br />
          <br />
          Many assignments are geared towards the development of new real estate although may also be for the benefit of
          an existing facility. Work can be completed prior to, during or post construction by the contractors.
        </p>
        {/* DAVE CARD */}
      </div>
      <div id='dave-card'>
      {/* <img src='https://www.bpiconsultants.ca/images/david.jpg' alt='David Bradbeer'/> */}
        <p>
          The company’s principal is J. David Bradbeer,
          P.Eng., MBA. David has over 30 years experience in various branches of real estate and experience in all
          sectors of real estate including commercial, medical, industrial, institutional, residential, retail, LEED and
          P3’s.
        </p>
      </div>
    </section>
  );
};

export default About;
