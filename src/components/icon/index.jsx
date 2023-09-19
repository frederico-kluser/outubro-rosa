import PropTypes from 'prop-types';
import exitIcon from '../../assets/exit-icon.svg';
import './icon.css';

const Icon = ({ iconName }) => {
	const icons = {
		exit: exitIcon,
	};

	if (!icons[iconName]) {
		throw new Error(`Icon ${iconName} does not exist`);
	}

	return <img src={icons[iconName]} alt={`${iconName} icon`} />;
};

Icon.propTypes = {
	iconName: PropTypes.string.isRequired,
};

export default Icon;
