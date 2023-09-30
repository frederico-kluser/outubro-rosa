import PropTypes from 'prop-types';

const modalObjectProp = PropTypes.shape({
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	callback: PropTypes.func.isRequired,
	open: PropTypes.bool,
});

export default modalObjectProp;
