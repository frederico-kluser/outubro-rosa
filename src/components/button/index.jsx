import PropTypes from 'prop-types';
import './button.css';
import Icon from '../icon';

const Button = ({ text, isOutline, isCondensed, isLink, iconName, disabled }) => {
	let className = isOutline ? 'button button--outline' : 'button';
	className = isLink ? 'button button--link' : className;
	className = isCondensed ? 'button button--condensed' : className;
	className = disabled ? `${className} button--disabled` : className;

	return (
		<button className={`${className} clickEffect`} disabled={disabled}>
			{iconName && <Icon iconName={iconName} />}
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isOutline: PropTypes.bool,
	isCondensed: PropTypes.bool,
	isLink: PropTypes.bool,
	iconName: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
