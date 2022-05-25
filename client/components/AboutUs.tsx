import React from 'react';

export default function AboutUs () {
  const createAwards = (): React.ReactElement[] => {
    const rawAwards = [
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'NAIOP Real Estate Excellence (REX) Award - Green Award of the Year'],
      ['https://bpiconsultants.ca/#:~:text=NAIOP%20Real%20Estate%20Excellence%20(REX)%20Award%20%2D%20Development%20of%20the%20Year',
       'NAIOP Real Estate Excellence (REX) Award - Development of the Year'],
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'Ontario Concrete 2010 Award - Structural Design Innovation'],
      ['https://bpiconsultants.ca/files/Mississauga-Urban-Design-Award-Jury-ACV.pdf',
       '2010 City of Mississauga Urban Design Award - Award of Excellence'],
    ];

    const awards:React.ReactElement[] = [];

    rawAwards.map(award => {
      awards.push(
        <li>
          <a href={award[0]}>
            {award[1]}
          </a>
        </li>);
    });

    return awards;
  }

  return (
    <div id='about-us' className='section'>
      {/* HEADER */}
      <h3 className='section-header'> WHO WE ARE </h3>

      {/* ABOUT */}
      <div id='main-about'>
        <p>
          Founded in July 2000, BPI Consultants provides development management services for the real estate sector. The company’s principal is J. David Bradbeer, P.Eng., MBA. David has over 30 years experience in various branches of real estate and experience in all sectors of real estate including commercial, medical, industrial, institutional, residential, retail, LEED and P3’s.
          <br />
          <br />
          Prior to founding BPI, David was with an international real estate consulting firm and with a mid-sized general contractor, design-builder and developer. David has a B.A.Sc. in Civil Engineering from the University of Waterloo (Professional Engineer) and an MBA from the University of Toronto (Rotman).
          <br />
          <br />
          Many assignments are geared towards the development of new real estate although may also be for the benefit of an existing facility. Work can be completed prior to, during or post construction by the contractors. In the past 12-years, BPI Consultants has worked on over 9 million square feet of real estate projects with a value of over $500 million in both renovation and new construction work.
          <br />
          <br />
          <strong>We are proud to announce that our project, AeroCentre V, has won four prestigious industry awards:</strong>
        </p>
        {/* DAVE CARD */}
        <div id='dave-card'>
        </div>
      </div>

      {/* AWARDS */}
      <section>
        <ul id='bpi-awards'>{createAwards()}</ul>
      </section>
    </div>
  )
}
