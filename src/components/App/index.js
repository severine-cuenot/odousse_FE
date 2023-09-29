// Imports
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import useScrollTop from '../../hooks/useScrollTop';

// Import components
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// Import pages
import Home from '../../pages/home';

// Import style
import './styles.scss';

// == Composant
function App() {
  useScrollTop();

  // Change font
  const [isFontChanged, setFontChange] = useState(false);
  const handleChangeFont = () => {
    setFontChange(!isFontChanged);
  };

  return (
    <div className={`app ${isFontChanged ? 'dyslexia-font' : 'default-font'}`}>
      <AppHeader isFontChanged={isFontChanged} handleChangeFont={handleChangeFont} />
      <div className="app__content">
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
