import PropTypes from 'prop-types';
import './button.css';
import Icon from '../icon';
import ClickEffect from '../clickEffect';

const Button = ({ text, isOutline, isLink, iconName, disabled }) => {
	let className = isOutline ? 'button button--outline' : 'button';
	className = isLink ? 'button button--link' : className;
	className = disabled ? 'button button--disabled' : className;

	return (
		<ClickEffect>
			<button className={className} disabled={disabled}>
				{iconName && <Icon iconName={iconName} />}
				{text}
			</button>
		</ClickEffect>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isOutline: PropTypes.bool,
	isLink: PropTypes.bool,
	iconName: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
