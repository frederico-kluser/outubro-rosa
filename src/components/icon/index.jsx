import PropTypes from 'prop-types';
import appleIcon from '../../assets/apple-icon.svg';
import googleIcon from '../../assets/google-play-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';
import './icon.css';

const Icon = ({ iconName }) => {
	const icons = {
		apple: appleIcon,
		exit: exitIcon,
		google: googleIcon,
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
