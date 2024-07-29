// Imports
import { Route, Routes } from 'react-router-dom';

// Import components
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// Import pages
import Home from '../../pages/home';

// Import style
// import './styles.scss';

// == Composant
function App() {
  return (
    <div>
      <AppHeader />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
