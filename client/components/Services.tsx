import React from 'react';

type ServiceType = {
  title: string,
  description: string,
  photo: string,
}

export default function Services() {
  const rawServices: ServiceType[] = [
    {
      title: 'Development Management',
      description: 'Third party management of construction projects.',
      photo: 'https://www.fsrao.ca/sites/default/files/images/2022-02/loantrust_1_opt.jpg',
    },
    {
      title: 'Project Monitoring',
      description: 'Loan or project monitoring services during the course of a project.',
      photo: 'https://www.fsrao.ca/sites/default/files/images/2022-02/loantrust_1_opt.jpg',
    },
    {
      title: 'Real Estate Consulting',
      description: 'Feasibility studies, cash flow projections, financial proformas, and more.',
      photo: 'https://www.fsrao.ca/sites/default/files/images/2022-02/loantrust_1_opt.jpg',
    },
  ];

  // create a service component for each service
  const services: React.ReactElement[] = [];
  rawServices.forEach(service => {
    services.push(
      <div className='card'>
        <div className='image'>
          <img src={service.photo} alt={`photo for ${service.title}`} />
        </div>
        <h3 className='title'>{service.title}</h3>
        <h4 className='description'>{service.description}</h4>
      </div>
    );
  });

  return (
    <section id='services' className='section'>
      <h2 className='section-header'>WHAT WE OFFER</h2>
      <div className='cards'>
        {services}
      </div>
      <h3>Sunt esse qui nulla consectetur aliquip commodo ea aute cillum sint excepteur adipisicing aliquip culpa. Cillum incididunt minim occaecat exercitation eiusmod ipsum ipsum sunt do.</h3>
    </section>
  );
}
