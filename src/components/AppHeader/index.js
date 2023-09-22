/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import 'external-svg-loader';

import ToggleDyslexia from '../ToggleDyslexia';
import Button from '../button';

import burgerImg from '../../../public/img/burger.svg';
import crossImg from '../../../public/img/cross.svg';

import './style.scss';

function AppHeader({ handleChangeFont }) {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  const svgImg = isExpanded ? crossImg : burgerImg;
  const svgClass = isExpanded ? 'nav-menu__burger-svg-cross' : 'nav-menu__burger-svg';
  return (
    <div>
      <div className="nav__mobile">
        <nav className="nav-menu" role="navigation" aria-label="Menu de navigation">
          <div className="nav-menu__block">
            <Link to="/" title="Retourner à la page d'accueil" className="nav-menu__logo">Ôdousse</Link>
            <button
              title="Ouvrir le menu"
              aria-label="Ouvrir le menu"
              className="nav-menu__burger-button"
              type="button"
              aria-expanded={isExpanded ? 'true' : 'false'}
              onClick={handleClick}
            >
              <svg
                data-src={svgImg}
                alt="{svgImg}"
                className={svgClass}
              />
              <span className="nav-menu__burger-button--text">Menu</span>
            </button>
          </div>
          <ul className={isExpanded ? 'nav-menu__expanded' : 'nav-menu__not-expanded'}>
            <ToggleDyslexia onClick={handleChangeFont} />
            <div className="nav-menu__expanded--buttons">
              <li onClick={handleClick}><Link to="/login"><Button label="S'inscrire" buttonStyle="simple" /></Link></li>
              <li onClick={handleClick}><Link to="/login"><Button label="Connexion" buttonStyle="empty" /></Link></li>
            </div>
            <li className="nav-menu__expanded--element" onClick={handleClick}><Link to="/lexicon">Glossaire</Link></li>
            <li className="nav-menu__expanded--element" onClick={handleClick}><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
        <hr className="nav-menu__border-block" />
      </div>
      <div className="nav__desktop">
        <nav className="nav-menu" role="navigation" aria-label="Menu de navigation">
          Menu desktop
        </nav>
        <hr className="nav-menu__border-block" />
      </div>
    </div>
  );
}

AppHeader.propTypes = {
  handleChangeFont: PropTypes.func.isRequired,
};

export default AppHeader;
