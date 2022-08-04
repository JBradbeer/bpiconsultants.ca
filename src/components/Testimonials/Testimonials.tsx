import React, { useState } from 'react';
import data from './testimonials.json';
import { Reccomendation } from '../../../types';
import './Testimonials.scss';

const Testimonials = () => {
  const [index, setIndex] = useState<number>(0);
  const [btnPressed, setBtnPressed] = useState<boolean>(false);
  const [reccomendations] = useState<Reccomendation[]>(data);

  // stop scrolling through testimonials once user has selected a specific testimonial
  if (!btnPressed) {
    // change the reccomendation every x milliseconds
    const timerSpeed = 8000;
    setTimeout(() => {
      // if new index is greater than number of total recs, reset to the first rec
      setIndex(index + 1 > reccomendations.length - 1 ? 0 : index + 1);
    }, timerSpeed);
  }

  return (
    <section id='testimonials'>
      <h2>WHAT OUR CLIENTS HAVE TO SAY</h2>
      <div id='reccomendation'>
        <p id='rec-quote'>{reccomendations[index].quote}</p>
        <h4 id='rec-name'>{reccomendations[index].name + ', ' + reccomendations[index].company}</h4>
        <h5 id='rec-title'>{reccomendations[index].title}</h5>
      </div>
      <div id={'rec-btns'}>
        {
          // create a button for each testimonial so that user can select specific testimonials
          reccomendations.map((recs, i) => (
            <button
              key={`rec-btn-${i}`}
              id={`rec-btn-${i}`}
              className={`rec-btn${index === i ? ' selected' : ''}`}
              onClick={() => {
                setIndex(i);
                setBtnPressed(true);
              }}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;
