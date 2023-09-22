import PropTypes from 'prop-types';
import './container.css';
import './container-responsive.css';

const Container = ({ children }) => <section className="container">{children}</section>;

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
