import './clickEffect.css';

import PropTypes from 'prop-types';

const ClickEffect = ({ children }) => {
	return <div className="clickEffect">{children}</div>;
};

ClickEffect.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ClickEffect;
