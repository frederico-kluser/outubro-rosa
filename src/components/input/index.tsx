import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '../../assets/info-filled-icon.svg';
import validateInput from '../../utils/validateInput';
import './input.css';
import './input-responsive.css';

const Input = ({ caption, placeholder, setValue, type, value }) => {
	const [active, setActive] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div
			className={`input-group ${active && 'active'} ${error && 'error'}`}
			onFocus={() => {
				setError(false);
				setActive(true);
			}}
			onBlur={() => {
				if (value) {
					const blurValidate = !validateInput(type, value);
					setError(blurValidate);
				}
				setActive(false);
			}}
		>
			<input
				className="input"
				value={value}
				onChange={(e) => {
					setError(false);
					console.log('validateInput(type, e.target.value) :', validateInput(type, e.target.value));
					setValue(e.target.value);
				}}
				placeholder={placeholder}
				type={type === 'cpf' ? 'text' : type}
			/>
			{active && <p>{active}</p>}
			{error && <p>{error}</p>}
			{error && <img className="error-image" src={InfoIcon} alt="Icone de error" />}
			{caption && <span className={`span ${error && 'error'}`}>{caption}</span>}
		</div>
	);
};

Input.propTypes = {
	caption: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'phone', 'date', 'cpf']).isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
