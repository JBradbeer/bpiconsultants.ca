import React, { useState } from 'react';
import data from './services.json';
import { Service } from '../../../types';

import './Services.scss';

const Services = () => {
  const [services] = useState<Service[]>(data);

  return (
    <section id='services'>
      <h2 className='section-header'>WHAT WE OFFER</h2>
      <p>
        Sunt esse qui nulla consectetur aliquip commodo ea aute cillum sint excepteur adipisicing aliquip culpa. Cillum
        incididunt minim occaecat exercitation eiusmod ipsum ipsum sunt do.
      </p>
      <div className='cards'>
        {services.map((service) => (
          <div className='card'>
            <div className='image'>
              <img src={service.photo} alt={`${service.title}`} />
            </div>
            <h3 className='title'>{service.title}</h3>
            <h4 className='description'>{service.description}</h4>
          </div>
        ))}
      </div>
      <p>
        Excepteur adipisicing aliquip culpa. incididunt minim occaecat exercitation eiusmod ipsum ipsum sunt do.
        Cillum sunt esse qui nulla.
      </p>
    </section>
  );
};

export default Services;
