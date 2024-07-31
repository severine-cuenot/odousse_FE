// Imports React
import { Link } from 'react-router-dom';

import './style.scss';

function AppFooter() {
  return (
    <footer className="bg-paon px-3 py-5 text-white">
      <div>
        <h5>Ôdousse</h5>
        <p>Un modeste projet pour vous aider à trouver les locataires idéaux de votre aquarium</p>
      </div>
      <div>
        <Link to="/about">A propos</Link>
        <Link to="policy">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default AppFooter;
