import PropTypes from 'prop-types';
import InformationIconPurple from '../../assets/information-purple.icon.svg';
import InformationIconGreen from '../../assets/information-green.icon.svg';
import './warning.css';
import './warning-responsive.css';

const Warning = ({ text, color = 'purple' }) => (
	<div className={`warning ${color}`}>
		{color === 'purple' && <img src={InformationIconPurple} alt="Icone de informação roxo" />}
		{color === 'green' && <img src={InformationIconGreen} alt="Icone de informação verde" />}
		{text}
	</div>
);

Warning.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.oneOf(['purple', 'green']),
};

export default Warning;
