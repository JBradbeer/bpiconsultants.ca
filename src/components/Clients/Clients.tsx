import './Clients.scss';
import { useState } from 'react';

import data from './clients.json';
import { Client } from '../../../types';

const Clients = () => {
  const [clients] = useState<Client[]>(data);

  return (
    <section id='clients'>
      <h2 className='content-header'> SELECT CLIENTS </h2>
      {/* <p>BPI has provided consulting services for numerous institution investors, including but not limited to:</p> */}
      <div id='client-list'>
        {clients.map((client) => (
          <div className='client'>
            <a
              key={`client-${client.name}`}
              id={`client-${client.name}`}
              href={client.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {
                // if client has an image use image, otherwise use name
                client.img ? <img src={client.img} /> : client.name
              }
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
