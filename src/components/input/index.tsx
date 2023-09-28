import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '../../assets/info-filled-icon.svg';
import './input.css';
import './input-responsive.css';

const Input = ({ error, caption, placeholder, setValue, type, value }) => {
	const [active, setActive] = React.useState(false);

	return (
		<div
			className={`input-group ${active && 'active'} ${error && 'error'}`}
			onFocus={() => setActive(true)}
			onBlur={() => setActive(false)}
		>
			<input
				className="input"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				placeholder={placeholder}
				type={type}
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
	error: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'phone']).isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
