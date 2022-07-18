import { useState } from 'react';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      id='nav-icon3'
      onClick={() => {
        // find the burger meny on the DOM
        const burgerMenu = document.getElementById("nav-icon3") as HTMLElement;
        // if menu is open, remove open class
        if (isOpen) burgerMenu.classList.remove("open");
        // if menu is closed, add an open class
        else burgerMenu.classList.add("open");
        // update local open state
        setIsOpen(!isOpen);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
