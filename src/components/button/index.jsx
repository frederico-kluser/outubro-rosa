import PropTypes from 'prop-types';
import './button.css';
import Icon from '../icon';

const Button = ({ text, isOutline }) => {
	const className = isOutline ? 'button button--outline' : 'button';

	return (
		<button className={className}>
			<Icon iconName="exit" />
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isOutline: PropTypes.bool,
};

export default Button;
