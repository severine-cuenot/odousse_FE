import { useState } from 'react';

import './style.scss';

function HeroSearch() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="hero__container">
      <h1 className="hero__title">Votre Recherche</h1>
      <section className="hero__section">
        <div className="hero__tabs-container">
          <ul aria-labelledby="hero__title">
            <li>
              <a
                id="tab-1"
                href="#fish"
                onClick={() => handleTabClick('tab-1')}
                className={activeTab === 'tab-1' ? 'active' : ''}
              >
                Poissons
              </a>
            </li>
            <li>
              <a
                id="tab-2"
                href="#invertebrate"
                onClick={() => handleTabClick('tab-2')}
                className={activeTab === 'tab-2' ? 'active' : ''}
              >
                Invertébrés
              </a>
            </li>
            <li>
              <a
                id="tab-3"
                href="#plant"
                onClick={() => handleTabClick('tab-3')}
                className={activeTab === 'tab-3' ? 'active' : ''}
              >
                Plantes
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__panels">
          <div id="fish" aria-labelledby="tab-1" className={activeTab === 'tab-1' ? 'active' : ''}>
            blablablabla Poissons
          </div>
          <div id="invertebrate" aria-labelledby="tab-2" className={activeTab === 'tab-2' ? 'active' : ''}>
            blablablabla Invertébrés
          </div>
          <div id="plant" aria-labelledby="tab-3" className={activeTab === 'tab-3' ? 'active' : ''}>
            blablablabla Plantes
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSearch;
