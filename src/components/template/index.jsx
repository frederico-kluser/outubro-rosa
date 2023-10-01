import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import Container from '../container';
import UseCheckToken from '../../hooks/useCheckToken';
import Modal from '../modal';
import modalObjectProp from '../../proptypes/modalProps';
import './template.css';
import './template-responsive.css';
import { useLocation, useNavigate } from 'react-router-dom';

/*
.step--success {
	border-radius: 100px;
	border: 1px solid #008471;
	background: #008471;
}

.step--actual {
	border-radius: 100px;
	border: 1px solid #ea1b23;
	background: #ea1b23;
	color: #ffffff;
}

.step--future {
	border-radius: 100px;
	border: 1px solid #404040;
	background: #ffffff;
	color: #404040;
}
*/
const getStepClassName = (step, actual) => {
	if (step > actual) {
		return 'step--success';
	}
	if (step === actual) {
		return 'step--actual';
	}
	return 'step--future';
};

const Template = ({ children, modalProps, step }) => {
	const location = useLocation();
	const locationState = location.state || {};
	const navigate = useNavigate();
	return (
		<UseCheckToken>
			<div>
				<Header />
				<section className={`body${step !== undefined ? ' body--steps' : ''}`}>
					<Container>
						{step !== undefined && (
							<div>
								<div className="container-steps">
									<div
										className={`step ${getStepClassName(step, 0)} clickEffect`}
										onClick={() => {
											if (step > 0) {
												navigate('/register', {
													state: locationState,
												});
											}
										}}
									>
										{step <= 0 ? 1 : ''}
									</div>
									<div
										className={`step ${getStepClassName(step, 1)} clickEffect`}
										onClick={() => {
											if (step > 1) {
												navigate('/unit', {
													state: locationState,
												});
											}
										}}
									>
										{step <= 1 ? 2 : ''}
									</div>
									<div className={`step ${getStepClassName(step, 2)} clickEffect`}>{step <= 2 ? 3 : ''}</div>
								</div>
								<div className="mt-24"></div>
							</div>
						)}
						{children}
					</Container>
				</section>
				<Footer />
				<Modal {...modalProps} />
			</div>
		</UseCheckToken>
	);
};

Template.propTypes = {
	children: PropTypes.node.isRequired,
	modalProps: modalObjectProp,
	step: PropTypes.number,
};

export default Template;
