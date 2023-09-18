import PropTypes from 'prop-types';
import './style.scss';

function Button({ label, isSubmit, buttonStyle }) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`button button--${buttonStyle}`}
      title={label}
    >
      <span>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  buttonStyle: 'simple',
  isSubmit: false,
  label: '',
};

Button.propTypes = {
  label: PropTypes.string,
  buttonStyle: PropTypes.string,
  isSubmit: PropTypes.bool,
};

export default Button;
