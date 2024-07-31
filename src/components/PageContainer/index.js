import PropTypes from 'prop-types';
import './style.scss';

function PageContainer({ children, ...props }) {
  return (
    <div className="PageContainer" {...props}>
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
