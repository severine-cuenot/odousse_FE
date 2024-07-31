// Imports
import { Route, Routes } from 'react-router-dom';

// Import components
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// Import pages
import Home from '../../pages/home';

// Import style
import './styles.scss';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
