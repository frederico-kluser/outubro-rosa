import { useState } from 'react';
import PropTypes from 'prop-types';
import RadioOn from '../../assets/radio-on-icon.svg';
import RadioOff from '../../assets/radio-off-icon.svg';
import './radio.css';

const Radio = ({ texts, onChange, vertical }) => {
	const [selected, setSelected] = useState(0);

	return (
		<div
			className="radio-group"
			style={{
				flexDirection: vertical ? 'column' : 'row',
			}}
		>
			{texts.map((text, index) => (
				<div
					key={text}
					className="radio clickEffect"
					onClick={() => {
						onChange(index);
						setSelected(index);
					}}
				>
					<img src={index === selected ? RadioOn : RadioOff} alt="Icone de radio" />
					<p>{text}</p>
				</div>
			))}
		</div>
	);
};

Radio.propTypes = {
	texts: PropTypes.arrayOf(PropTypes.string).isRequired,
	onChange: PropTypes.func.isRequired,
	vertical: PropTypes.bool,
};

export default Radio;
