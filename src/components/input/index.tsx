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
		case 'date': // day/month/year
			const lengthDate = newValue.length;

			if (lengthDate === 3) {
				newValue = newValue.replace(/(\d{2})/, '$1/');
			}

			if (lengthDate === 5) {
				newValue = newValue.replace(/(\d{2})(\d{2})/, '$1/$2/');
			}

			if (lengthDate === 6) {
				newValue = newValue.replace(/(\d{2})(\d{2})(\d{1})/, '$1/$2/$3');
			}

			if (lengthDate === 8) {
				newValue = newValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
			}
			break;
		default:
			newValue = value;
			break;
	}
	return newValue;
};

const getCaption = (type, error, active) => {
	if (active) {
		switch (type) {
			case 'phone':
			case 'date':
			case 'cpf':
				return 'Digite apenas os números';
			case 'email':
				return 'nome@exemplo.com';
			default:
				return '';
		}
	}
	if (error) {
		switch (type) {
			case 'phone':
				return 'Telefone inválido';
			case 'date':
				return 'Data inválida';
			case 'cpf':
				return 'CPF inválido';
			case 'email':
				return 'Email inválido';
			default:
				return '';
		}
	}
	return '';
};

const getInputType = (type) => {
	switch (type) {
		case 'cpf':
		case 'date':
			return 'text';
		default:
			return type;
	}
};

const Input = ({ placeholder, setValue, type, value }) => {
	const [active, setActive] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div
			className={`input-group${!!active ? ' active' : ''}${!!error ? ' error' : ''}`}
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
				type={getInputType(type)}
			/>
			{active && <p>{placeholder}</p>}
			{error && <p>{placeholder}</p>}
			{error && <img className="error-image" src={InfoIcon} alt="Icone de error" />}
			{getCaption(type, error, active) && (
				<span className={`span ${error && 'error'}`}>{getCaption(type, error, active)}</span>
			)}
		</div>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'phone', 'date', 'cpf']).isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
