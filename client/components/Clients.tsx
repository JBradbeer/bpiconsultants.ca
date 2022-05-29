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
      {
        name: 'Hospitals of Ontario Pension Plan',
        link: 'https://hoopp.com/',
        img:  'https://ochu.on.ca/wp-content/uploads/2019/10/HOOPP-Logo-700x203.png'
      },
      {
        name: 'Bank of Montreal (BMO)',
        link: 'https://www.bmo.com/main/personal',
        img:  'https://logos-world.net/wp-content/uploads/2021/02/BMO-Logo.png'
      },
      {
        name: 'KingSett Capital',
        link: 'https://www.kingsettcapital.com/',
        img:  ''
      },
      {
        name: 'Citibank Canada',
        link: 'https://www.citigroup.com/citi/',
        img:  ''
      },
      {
        name: 'Sun Life Financial',
        link: 'https://www.sunlife.ca/en/',
        img:  ''
      },
      {
        name: 'Morguard Investments',
        link: 'https://www.morguard.com/',
        img:  ''
      },
      {
        name: 'Economic Research Associates',
        link: 'http://www.econsresearch.com/',//FIXME: is this the correct site
        img: null
      },
      {
        name: 'Ottawa-Carlton District School Board',
        link: 'https://ocdsb.ca/',
        img: null
      },
      {
        name: 'Exchange Solutions',
        link: 'https://www.exchangesolutions.com/',
        img: null
       },
       {
        name: 'Talisker Corporation',
        link: 'https://taliskerresources.com/',
        img: null
       },
       {
        name: 'Retirement Residences REIT',
        link: null,
        img: null
       },
       {
        name: 'Central Park Lodge',
        link: null,
        img: null
       },
       {
        name: 'Hanscombs Consulting',
        link: null,
        img: null
       },
    ]

    let clientList:React.ReactElement[] = [];

    // create a anchor element for each client and push to array
    rawClients.forEach(client => {
      clientList.push(
       <div className='client'>
         {client.img ? <img src={client.img} /> : null}
         <a href={client.link}>
           {client.name}
         </a>
       </div>
      )
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