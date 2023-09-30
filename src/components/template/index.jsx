import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import Container from '../container';
import UseCheckToken from '../../hooks/useCheckToken';
import Modal from '../modal';
import './template.css';
import './template-responsive.css';

const Template = ({ children }) => {
	return (
		<UseCheckToken>
			<div>
				<Header />
				<section className="body">
					<Container>{children}</Container>
				</section>
				<Footer />
				{/* <Modal /> */}
			</div>
		</UseCheckToken>
	);
};

Template.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Template;
