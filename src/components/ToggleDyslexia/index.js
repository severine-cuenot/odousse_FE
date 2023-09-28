import PropTypes from 'prop-types';

import './style.scss';

function ToggleDyslexia({ onClick }) {
  return (
    <label className="toggle" htmlFor="Toggle">
      <input
        type="checkbox"
        className="toggle__input"
        id="Toggle"
        onClick={onClick}
      />
      <span className="toggle__track">
        <span className="toggle__indicator">
          <span className="toggle__checkMark">
            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z" />
            </svg>
          </span>
        </span>
      </span>
      Dyslexie
    </label>
  );
}

ToggleDyslexia.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleDyslexia;
