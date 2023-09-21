import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ caption, placeholder, setValue, type, value }) => (
	<div className="input-group">
		<input
			className="input"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			placeholder={placeholder}
			type={type}
		/>
		{caption && <span className="span">{caption}</span>}
	</div>
);

Input.propTypes = {
	caption: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password', 'email']).isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
