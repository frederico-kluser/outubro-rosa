import PropTypes from 'prop-types';
import './button.css';
import Icon from '../icon';

const Button = ({ id, text, isOutline, isCondensed, isError, isLink, iconName, disabled, onClick }) => {
	let className = isOutline ? 'button button--outline' : 'button';
	className = isLink ? 'button button--link' : className;
	className = isCondensed ? 'button button--condensed' : className;
	className = disabled ? `${className} button--disabled` : className;

	return (
		<button
			id={id || null}
			className={`${className} ${!!isError && 'button--error'} clickEffect`}
			disabled={disabled}
			onClick={onClick}
		>
			{iconName && <Icon iconName={iconName} />}
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	id: PropTypes.string,
	isOutline: PropTypes.bool,
	isCondensed: PropTypes.bool,
	isError: PropTypes.bool,
	isLink: PropTypes.bool,
	iconName: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
