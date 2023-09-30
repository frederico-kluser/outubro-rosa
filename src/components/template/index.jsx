import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import Container from '../container';
import UseCheckToken from '../../hooks/useCheckToken';
import Modal from '../modal';
import './template.css';
import './template-responsive.css';
import modalObjectProp from '../../proptypes/modalProps';

const Template = ({ children, modalProps }) => {
	return (
		<UseCheckToken>
			<div>
				<Header />
				<section className="body">
					<Container>{children}</Container>
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
};

export default Template;
