import React from 'react';

type ProjectType = {
  name: string,
  address: string,
  type: string,
  client: string,
  value: number,
  dateCompleted: string | null,
  image: string,
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
      image: 'https://lh3.googleusercontent.com/_xdwSeB7iFGB2m2OJHPLjmeOBJrzS8OLpB7SJWxVhB3W7UZ4oKtCTkGtELbtEuUbl1sLsQ=w16383'
    },
    {
      name: 'Spectrum Square',
      address: 'Mississauga, ON',
      type: 'Office',
      client: 'HOOPP',
      value: 500000000,
      dateCompleted: '2017',
      image: 'https://bpiconsultants.ca/images/portfolio/spectrum_day_view.jpg'
    },
    {
      name: 'Aerocentre V',
      address: 'Kitchener, ON',
      type: 'Office / Campus',
      client: 'KingSett Capital',
      value: 500000000,
      dateCompleted: '2010',
      image: 'https://uploads-ssl.webflow.com/58caaa4eca21145179969d22/5f407b4354a6e4359d49c4ae_AeroCentre%20V%20-%20Sweeny%26Co%20Architects%20-%20P02_LR%20-%20Shai%20Gil%20-%20exterior%20evening%20shot%20looking%20south.jpg'
    },
    {
      name: 'Citibank Canada',
      address: 'Kitchener, ON',
      type: 'Office',
      client: 'KingSett Capital',
      value: 500000000,
      dateCompleted: '2006',
      image: 'https://bpiconsultants.ca/images/portfolio/citi_building_small.jpeg'
    },
  ]

  const projects: React.ReactElement[] = []
  rawProjects.forEach(proj => {
    projects.push(
      <div className='project'>
        <div className='project-header'>
          <h3 className='project-name'>{proj.name}</h3>
          <h3 className='project-minor'>{
            proj.dateCompleted ? 
              `Completed ${proj.dateCompleted}` : 
              'Under Construction'}
          </h3>
        </div>
        <img src={proj.image} alt={`photo of ${proj.name}`} />
        <h4 className='project-minor project-address'>{proj.address} </h4>
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