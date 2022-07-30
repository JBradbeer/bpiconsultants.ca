import { useEffect } from 'react';
import './KeyFacts.scss';

const KeyFacts = () => {
  const animateStats = () => {
    // find all key facts on the dom
    const facts = document.querySelectorAll('.key-fact');

    facts.forEach((fact) => {
      // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
      const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;

      const time = 1000;
      let result = [...(patt.exec(fact.textContent as string) as any[])];

      let fresh = true;
      let ticks: any;

      // Remove first full match from result array (we dont need the full match, just the individual match groups).
      result.shift();

      // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
      result = result.filter((res) => res != null);

      // while (fact.firstChild) {
      //   fact.removeChild(fact.firstChild);
      // }


        for (let res of result) {
          if (isNaN(res)) {
            fact.insertAdjacentHTML('beforeend', `<span>${res}</span>`);
          } else {
            for (let i = 0; i < res.length; i++) {
              fact.insertAdjacentHTML(
                'beforeend',
                `<span data-value="${res[i]}">
      					<span>&ndash;</span>
      					${Array(parseInt(res[i]) + 1)
                  .join('0')
                  .split('0')
                  .map(
                    (x, j) => `
      						<span>${j}</span>
      					`
                  )
                  .join('')}
      				</span>`
              );
            }
          }
        }

        // ticks = [...fact.querySelectorAll('span[data-value]')];

        // let activate = () => {
        //   let top = fact.getBoundingClientRect().top;
        //   let offset = window.innerHeight * 0.8;

        //   setTimeout(() => {
        //     fresh = false;
        //   }, time);

        //   if (top < offset) {
        //     setTimeout(
        //       () => {
        //         for (let tick of ticks) {
        //           let dist = parseInt(tick.getAttribute('data-value')) + 1;
        //           tick.style.transform = `translateY(-${dist * 100}%)`;
        //         }
        //       },
        //       fresh ? time : 0
        //     );
        //     window.removeEventListener('scroll', activate);
        //   }
        // };
        // window.addEventListener('scroll', activate);
        // activate();
    });
  };

  // ! change this to render in once its on screen
  useEffect(() => {
    // animateStats();
  }, []);

  return (
    <div id='key-facts'>
      <div id='sf-num-container'>
        <div id='sf-num' className='key-fact'>
          990K
        </div>
        <h3>SF Completed</h3>
      </div>
      <div id='value-container'>
        <div id='value-num' className='key-fact'>
        300M
        </div>
        <h3>$ Completed</h3>
      </div>
      <div id='years-exp-container'>
        <div id='years-exp-num' className='key-fact'>
          30
        </div>
        <h3>Years Experience</h3>
      </div>
    </div>
  );
};

export default KeyFacts;
