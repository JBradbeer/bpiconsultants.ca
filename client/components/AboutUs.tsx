import React from 'react';

export default function AboutUs () {
  const createAwards = (): React.ReactElement[] => {
    const rawAwards = [
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'NAIOP Real Estate Excellence (REX) Award - Green Award of the Year'],
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'NAIOP Real Estate Excellence (REX) Award - Green Award of the Year'],
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'NAIOP Real Estate Excellence (REX) Award - Green Award of the Year'],
      ['https://bpiconsultants.ca/files/Mississauga-News-REX-Award-Article.pdf',
       'NAIOP Real Estate Excellence (REX) Award - Green Award of the Year'],
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
    <div className='about-us section'>
      {/* HEADER */}
      <h3 className='section-header'> Who We Are </h3>
      {/* ABOUT */}
      <p>
        BPI Consultants is a boutique consulting company specializing in advisory and management services for the real estate and construction/development sector. Our assignments are primarily geared towards the development component of real estate. 
      </p>
      {/* AWARDS */}
      <section>
        <p>We are proud to announce that our project, AeroCentre V, has won four prestigious industry awards:</p>
        <ul>{createAwards()}</ul>
      </section>
    </div>
  )
}
