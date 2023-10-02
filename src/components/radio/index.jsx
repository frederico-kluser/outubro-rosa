import { useState } from 'react';
import PropTypes from 'prop-types';
import RadioOn from '../../assets/radio-on-icon.svg';
import RadioOff from '../../assets/radio-off-icon.svg';
import './radio.css';

const Radio = ({ texts, onChange, vertical, initialValue = 0, titles = [] }) => {
	const [selected, setSelected] = useState(initialValue);

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
					className={`${titles.length ? 'radio-column' : 'radio'} clickEffect`}
					onClick={() => {
						onChange(index);
						setSelected(index);
					}}
				>
					<div className={titles.length ? 'radio-line' : ''}>
						<img src={index === selected ? RadioOn : RadioOff} alt="Icone de radio" />
						{titles.length ? (
							<p>
								<b>{titles[index]}</b>
							</p>
						) : null}
					</div>
					<p className={titles.length ? 'radio-second-line' : ''}>{text}</p>
				</div>
			))}
		</div>
	);
};

Radio.propTypes = {
	texts: PropTypes.arrayOf(PropTypes.string).isRequired,
	titles: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func.isRequired,
	vertical: PropTypes.bool,
	initialValue: PropTypes.number,
};

export default Radio;
