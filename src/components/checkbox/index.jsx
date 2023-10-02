import { useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxOn from '../../assets/checkbox-on-icon.svg';
import CheckboxOff from '../../assets/checkbox-off-icon.svg';
import './checkbox.css';

const Checkbox = ({ text, onChange }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div
			className="checkbox clickEffect"
			onClick={() => {
				onChange(!isChecked);
				setIsChecked(!isChecked);
			}}
		>
			<img src={isChecked ? CheckboxOn : CheckboxOff} alt="Icone de checkbox" />
			<p>{text}</p>
		</div>
	);
};

Checkbox.propTypes = {
	text: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Checkbox;
