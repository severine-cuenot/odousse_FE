import { Link } from 'react-router-dom';

import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main-nav">
          {/* HEADER */}
          <div>
            <header className="footer__header">
              <Link to="/">Ôdousse</Link>
            </header>
          </div>
          <div>
            <nav className="footer__navigation">
              <h2 className="footer__section-title">
                Ôdousse
              </h2>
              <ul className="footer__section-list">
                <li><Link to="/about">À propos</Link></li>
              </ul>
            </nav>
          </div>
          {/* TOOLS */}
          <div>
            <h2 className="footer__section-title">
              Outils
            </h2>
            <nav className="footer__navigation">
              <ul className="footer__section-list">
                <li><Link to="/search">Recherche détaillée</Link></li>
                <li><Link to="/lexicon">Lexique</Link></li>
              </ul>
            </nav>
          </div>
          {/* LEGAL */}
          <div>
            <h2 className="footer__section-title">
              Légal
            </h2>
            <nav className="footer__navigation">
              <ul className="footer__section-list">
                <li><Link to="/cgu">CGU</Link></li>
                <li><Link to="/privacy">Politique de confidentialité</Link></li>
                <li><Link to="/credits">Crédits</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="footer__copyright">
          <p>Tous droits réservés &copy; NineInjections {year}</p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
