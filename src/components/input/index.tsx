import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '../../assets/info-filled-icon.svg';
import validateInput from '../../utils/validateInput';
import './input.css';
import './input-responsive.css';

const applyMask = (type, value) => {
	let newValue = value.replace(/\D/g, '');
	switch (type) {
		case 'cpf':
			newValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
			console.log('newValue :', newValue);
			break;
		case 'phone':
			const length = newValue.length; // remove caracteres não numéricos e conta o tamanho

			if (length === 10) {
				newValue = newValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
			}

			if (length === 11) {
				newValue = newValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
			}

			if (length === 12) {
				newValue = newValue.replace(/(\d{3})(\d{5})(\d{4})/, '($1) $2-$3');
			}

			if (length === 13) {
				newValue = newValue.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
			}

			if (length === 14) {
				newValue = newValue.replace(/(\d{2})(\d{3})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
			}
			break;
	}
	return newValue;
};

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
					setValue(applyMask(type, e.target.value));
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
