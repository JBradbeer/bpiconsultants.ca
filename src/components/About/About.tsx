import './About.scss';

const About = () => {
  return (
    <section id='about'>
      {/* HEADER */}
      <h2 className='content-header'> WHO WE ARE </h2>

      {/* ABOUT */}
      <div id='main-about'>
        <div id='key-facts-container'>
          <div id='sf-num-container'>
            <div id='sf-num'></div>
            <h3>SF Completed</h3>
          </div>
          <div id='value-container'>
            <div id='value-num'></div>
            <h3>$ Completed</h3>
          </div>
          <div id='years-exp-container'>
            <div id='years-exp-num'></div>
            <h3>Years Experience</h3>
          </div>
        </div>
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
    </section>
  );
}

export default About;
