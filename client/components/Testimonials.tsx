import React, { useState } from 'react';


type ReccomendationType = {
  quote: string,
  company: string,
  name: string,
  title: string
}


export default function Testimonials () {
  let [index, setIndex] = useState<number>(0);
  let [btnPressed, setBtnPressed] = useState<boolean>(false)

  const recs:ReccomendationType[] = [
    {
      quote: 'David\'s vast experience and attention to detail has successfully enabled him to lead the team involved throughout all stages of the project',
      company: 'HOOPP',
      name: 'Lisa Lafave',
      title: 'Sr. Portfolio Manager'
    },
    {
      quote: 'Over the past three years, we have had the good fortune to work with BPI Consultants Corp. on the AeroCentre V office building for HOOPP; a $50M development',
      company: 'Sweeny &Co Architects',
      name: 'John Gillanders',
      title: 'Principal'
    },
    {
      quote: 'Vanbots has had the privilege to work with David Bradbeer for the past 20 years on many projects across Canada',
      company: 'VANBOTS',
      name: 'Joel Parke',
      title: 'VP, Client Services'
    },
  ]

  // create a button for each testimonial so that user can select specific testimonials
  const recBtns: React.ReactElement[] = [];
  recs.forEach((recs, i) => {
    recBtns.push(
      <button
        key={`rec-btn-${i}`} 
        id={`rec-btn-${i}`}
        className={`rec-btn${index === i ? ' selected' : ''}`}
        onClick={() => {
          setIndex(i);
          setBtnPressed(true);
        }}
      />
    )
  })

  // stop scrolling through testimonials once user has selected a specific testimonial
  if (!btnPressed) {
    // change the reccomendation every x milliseconds
    const timerSpeed = 8000;
    setTimeout(() => {
      // if new index is greater than number of total recs, reset to the first rec
      setIndex(index + 1 > recs.length - 1 ? 0 : index + 1)
    }, timerSpeed)
  }


  return (
    <section id='testimonials'>
      <h3>HEAR WHAT OUR CLIENTS HAVE TO SAY</h3>
      <div id='reccomendation'>
        <p id='rec-quote'>{recs[index].quote}</p>
        <h4 id='rec-name'>{recs[index].name + ', ' + recs[index].company}</h4>
        <h5 id='rec-title'>{recs[index].title}</h5>
      </div>
      <div id={'rec-btns'}>
        {recBtns}
      </div>
    </section>
  )
}