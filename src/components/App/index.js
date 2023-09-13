// Imports
// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import components
import AppHeader from '../AppHeader';

// Import style
import './styles.scss';

// == Composant
function App() {
  // Change font
  const [isFontChanged, setFontChange] = useState(false);
  const handleChangeFont = () => {
    setFontChange(!isFontChanged);
  };

  return (
    <div className={`app ${isFontChanged ? 'dyslexia-font' : 'default-font'}`}>
      <AppHeader isFontChanged={isFontChanged} handleChangeFont={handleChangeFont} />
    </div>
  );
}

// == Export
export default App;
