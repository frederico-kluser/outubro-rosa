import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '../../assets/info-filled-icon.svg';
import './input.css';
import './input-responsive.css';

const Input = ({ info, error, caption, placeholder, setValue, type, value }) => (
	<div className={`input-group ${error && 'error'} ${info && 'info'}`}>
		<input
			className="input"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			placeholder={placeholder}
			type={type}
		/>
		{error && <p>{error}</p>}
		{info && <p>{info}</p>}
		{info && <img className="info-image" src={InfoIcon} alt="Icone de info" />}
		{caption && <span className={`span ${info && 'info'}`}>{caption}</span>}
	</div>
);

Input.propTypes = {
	caption: PropTypes.string,
	error: PropTypes.string,
	info: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'phone']).isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
