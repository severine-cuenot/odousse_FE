// import { Link } from 'react-router-dom';
import './style.scss';

function AppHeader() {
  return (
    <nav className="nav-menu" role="navigation" aria-label="Menu de navigation">
      <div className="nav-menu__left-part">
        <li className="nav-menu__logo">Ôdousse</li>
        <li>Dyslexie</li>
      </div>
      <div className="nav-menu__right-part">
        <li>Inscription</li>
        <li>Connexion</li>
      </div>
    </nav>
  );
}

export default AppHeader;
