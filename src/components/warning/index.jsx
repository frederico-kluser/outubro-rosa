import PropTypes from 'prop-types';
import InformationIcon from '../../assets/information-icon.svg';
import './warning.css';

const Warning = ({ text }) => (
	<div className="warning">
		<img src={InformationIcon} alt="Information Icon" />
		{text}
	</div>
);

Warning.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Warning;
