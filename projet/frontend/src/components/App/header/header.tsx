import { useState } from 'react';

import logo from '../../../assets/LocalExpress_logo.svg';
import './header.scss';


function Header() {
  const [isReduced, setIsReduced] = useState(false);

  const handleClick = () => {
    setIsReduced(true);
  };

  return (
    <header className={`header ${isReduced ? 'reduced' : ''}`}>
      <img src={logo} alt="Local Express" />
      <h1>Vos courses livrées avec le sourire</h1>

      <button
        type="button"
        className="big"
        onClick={handleClick}
      >
        Commencer
      </button>

    </header>
  );
}


export default Header;
