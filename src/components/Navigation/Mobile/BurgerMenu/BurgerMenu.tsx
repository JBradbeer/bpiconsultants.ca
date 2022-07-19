import { useState } from 'react';
import './BurgerMenu.scss';

type Props = {
  menuOnClick: () => void;
}

const BurgerMenu = ({ menuOnClick }: Props) => {
  return (
    <div
      id='nav-icon3'
      onClick={menuOnClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
