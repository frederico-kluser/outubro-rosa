import React from 'react';
import PropTypes from 'prop-types';
import CircleCheckIcon from '../../assets/circle-check-icon.svg';
import InformationIconPurple from '../../assets/information-purple.icon.svg';
import Button from '../../components/button';
import './modal.css';

const Modal = ({ title, paragraph, buttonText, callback, open, isError }) => {
	return open ? (
		<div className="modal-background">
			<div className="modal">
				<img
					src={isError ? InformationIconPurple : CircleCheckIcon}
					className="modal-image"
					alt="Ícone de confirmação"
				/>
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
					isError={isError}
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
	isError: PropTypes.bool,
};

export default Modal;
