import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

import ToggleDyslexia from '../ToggleDyslexia';
import Button from '../button';

import './style.scss';

function AppHeader({ handleChangeFont }) {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div>
      <nav className="nav-menu" role="navigation" aria-label="Menu de navigation">
        <div className="nav-menu__block">
          <Link to="/" title="Retourner à la page d'accueil" className="nav-menu__logo">Ôdousse</Link>
          <button
            className="nav-menu__burger-button"
            type="button"
            aria-expanded={isExpanded ? 'true' : 'false'}
            onClick={handleClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            <span className="nav-menu__burger-button--text">Menu</span>
          </button>
        </div>
        <ul className={isExpanded ? 'nav-menu__expanded' : 'nav-menu__not-expanded'}>
          <ToggleDyslexia onClick={handleChangeFont} />
          <li onClick={handleClick}><Button label="S'inscrire" buttonStyle="simple" /></li>
          <li className="nav-menu__expanded--element" onClick={handleClick}>Connexion</li>
          <li className="nav-menu__expanded--element" onClick={handleClick}>Glossaire</li>
          <li className="nav-menu__expanded--element" onClick={handleClick}>A propos</li>
        </ul>
      </nav>
      <hr className="nav-menu__border-block" />
    </div>
  );
}

AppHeader.propTypes = {
  handleChangeFont: PropTypes.func.isRequired,
};

export default AppHeader;
