import React from 'react';
import PropTypes from 'prop-types';
import CircleCheckIcon from '../../assets/circle-check-icon.svg';
import Button from '../../components/button';
import './modal.css';

const Modal = ({ title, paragraph, buttonText, callback, open }) => {
	return open ? (
		<div className="modal-background">
			<div className="modal">
				<img src={CircleCheckIcon} alt="Ícone de confirmação" />
				<div className="modal-text-div">
					<h1 className="modal-title">{title}</h1>
					<p className="modal-paragraph">{paragraph}</p>
				</div>
				<Button
					text={buttonText}
					isCondensed
					onClick={() => {
						callback();
					}}
				/>
			</div>
		</div>
	) : null;
};

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	callback: PropTypes.func.isRequired,
	open: PropTypes.bool,
};

export default Modal;
