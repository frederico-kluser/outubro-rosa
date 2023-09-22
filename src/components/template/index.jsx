import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import Container from '../container';
import './template.css';
import './template-responsive.css';

const Template = ({ children }) => (
	<div>
		<Header />
		<section className="body">
			<Container>{children}</Container>
		</section>
		<Footer />
	</div>
);

Template.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Template;
