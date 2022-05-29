import React, {useState} from 'react';
import Reccomendation from './Reccomendation';

// type rawClient 

export default function Clients () {
  let [reccomendIndex, setReccomendIndex] = useState<number>(0);

  // create an array of client react elements to insert into DOM
  // FIXME: TYPE ME
  const createClientList = () => {
    // FIXME: type me
    const rawClients = [
      ['HOOPP',
       'https://hoopp.com/'],
       ['KingSett Capital',
       'https://www.kingsettcapital.com/'],
       ['Bank of Montreal (BMO)',
       'https://www.bmo.com/main/personal'],
       ['Citibank',
       'https://www.citigroup.com/citi/'],
       ['Sun Life Financial',
       'https://www.sunlife.ca/en/'],
       ['Ottawa-Carlton District School Board',
       'https://ocdsb.ca/'],
       ['Morguard Investments',
       'https://www.morguard.com/'],
       ['Economic Research Associates',
       'http://www.econsresearch.com/'], //FIXME: is this the correct site
       ['Retirement Residences REIT',
        null],
       ['Exchange Solutions',
       'https://www.exchangesolutions.com/'],
       ['Central Park Lodge',
        null],
       ['Hanscombs Consulting',
       null],
       ['Talisker Corporation',
       'https://taliskerresources.com/'],
    ]

    let clientList:React.ReactElement[] = [];

    // create a anchor element for each client and push to array
    rawClients.forEach(client => {
      clientList.push(<a href={client[1]}>{client[0]}</a>)
    });

    return clientList;
  }

  // FIXME: describe me & type me
  const createReccomendation = () => {

  }

  return (
    <div id='clients' className='section'>
      {/* OUR CLIENTS HEADER */}
      <h3 className='section-header'> PAST CLIENTS </h3>

      {/* RECCOMENDATIONS */}
      <div id='reccomendations'>
        <Reccomendation /> {/*// index={reccomendIndex}*/}
      </div>

      {/* CLIENT LIST */}
      <div id='client-list'>
        <ul>{createClientList()}</ul>
      </div>
    </div>
  )
}