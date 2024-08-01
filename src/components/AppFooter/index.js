// Imports React
import { Link } from 'react-router-dom';

import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="footer__topBlock text-white bg-paon px-5 py-5">
        <div className="footer__topBlock-left">
          <h4>Ôdousse</h4>
          <p>Un modeste projet pour vous aider à trouver les locataires idéaux de votre aquarium</p>
        </div>
        <div className="footer__topBlock-right">
          <nav>
            <h5>Les recherches par thèmes</h5>
            <ul className="footer__navList">
              <li><Link to="/about">Biotopes</Link></li>
              <li><Link to="policy">Litrage</Link></li>
            </ul>
          </nav>
          <nav>
            <h5>À propos</h5>
            <ul className="footer__navList">
              <li><Link to="/about">Le projet</Link></li>
              <li><Link to="policy">Mentions légales</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__bottomBlock px-5 py-1 bg-light-paon text-white-50">
        <p>Tous droits réservés &copy; <a href="http://severine-cuenot.surge.sh/">Nine</a> {year}</p>
      </div>
    </footer>
  );
}

export default AppFooter;
