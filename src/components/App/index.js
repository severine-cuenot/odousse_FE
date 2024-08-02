// Imports
import { Route, Routes } from 'react-router-dom';

// Import components
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// Import pages
import Home from '../../pages/home';
import NotFound from '../../pages/404';
import About from '../../pages/about';
import Ressources from '../../pages/ressources';
import Policy from '../../pages/policy';
import Biotops from '../../pages/biotops';
import Litreage from '../../pages/litreage';
import AdvancedSearch from '../../pages/advancedSearch';

// Import style
import './styles.scss';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/recherche" element={<AdvancedSearch />} />
        <Route path="/biotopes" element={<Biotops />} />
        <Route path="/litrage" element={<Litreage />} />
        <Route path="/legal" element={<Policy />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
