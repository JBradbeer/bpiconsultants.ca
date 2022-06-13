import React from 'react';

type ProjectType = {
  name: string,
  address: string,
  type: string,
  client: string,
  value: number,
  dateCompleted: string | null,
  image: string,
  description?: string,
}

export default function Projects () {
  const rawProjects: ProjectType[] = [
    {
      name: 'GloveBox',
      address: 'Kitchener, ON',
      type: 'Office',
      client: 'KingSett Capital',
      value: 500000000,
      dateCompleted: null,
      image: 'https://lh6.googleusercontent.com/JyY4KuGtcMVNQs2RuW0pP7ckuWN1RV179qjOeUN_TMD7FgVdoMs15RTCIaE1DROQwa224Q=w16383',
      description: 'Sunt pariatur pariatur labore eu ex. Nisi non veniam veniam nostrud reprehenderit. Proident nisi veniam Lorem Lorem reprehenderit id commodo officia aliqua nostrud. Non cillum elit irure tempor incididunt dolor laboris non excepteur elit. Enim incididunt amet aute sint adipisicing reprehenderit nulla ea cupidatat dolore consectetur nulla anim excepteur. Aliqua pariatur ex qui nisi consectetur fugiat do do voluptate. Reprehenderit velit dolore labore do laborum culpa.'
    },
    {
      name: 'Spectrum Square',
      address: 'Mississauga, ON',
      type: 'Office',
      client: 'HOOPP',
      value: 500000000,
      dateCompleted: '2017',
      image: 'https://uploads-ssl.webflow.com/58caaa4eca21145179969d22/5a733b3dbe67fa00012d0961_Spectrum%20Square%20-%20Sweeny%26Co%20Architects%20-%20P09_LR%20-%20doublespace%20photography%20-%20exterior%20dusk%20north%20facade.jpg',
      description: 'Aute do ut nulla esse ad do est non mollit duis minim duis. Eu ullamco velit qui ex ut laboris elit id nisi reprehenderit. Ad incididunt cupidatat Lorem enim do proident minim sunt culpa. Commodo consectetur amet aute sint in consectetur qui. Eu culpa enim commodo sint do esse duis minim do magna. Pariatur incididunt non eu mollit officia sit occaecat exercitation ut irure sint nisi pariatur ipsum.'
    },
    {
      name: 'Aerocentre V',
      address: 'Mississauga, ON',
      type: 'Office / Campus',
      client: 'KingSett Capital',
      value: 500000000,
      dateCompleted: '2010',
      image: 'https://uploads-ssl.webflow.com/58caaa4eca21145179969d22/5f407b4354a6e4359d49c4ae_AeroCentre%20V%20-%20Sweeny%26Co%20Architects%20-%20P02_LR%20-%20Shai%20Gil%20-%20exterior%20evening%20shot%20looking%20south.jpg'
    },
    {
      name: 'Citigroup Place',
      address: 'Toronto, ON',
      type: 'Office',
      client: 'Citibank Canada',
      value: 500000000,
      dateCompleted: '2006',
      image: 'https://bpiconsultants.ca/images/portfolio/citi_building_small.jpeg'
    },
  ]

  const projects: React.ReactElement[] = []
  rawProjects.forEach(proj => {
    projects.push(
      <div className='project'>
        <div className='header'>
          <h3 className='name'>{proj.name}</h3>
          <h3 className='minor'>{
            proj.dateCompleted ? 
              `Completed ${proj.dateCompleted}` : 
              'Under Construction'}
          </h3>
        </div>
        <div className='img-container'>
          <div className='hidden-overlay'>
            
          </div>
          <img src={proj.image} alt={`photo of ${proj.name}`} />
        </div>
        <h3 className='address'>{proj.address} </h3>
      </div>
    )
  });

  return (
    <section id='projects' className='section'>
      <h2 className='section-header'>SELECT PROJECTS</h2>
      <div id='projects-overview'>
        {projects}
      </div>
    </section>
  )
}