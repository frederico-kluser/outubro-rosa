import PropTypes from 'prop-types';
import LoadingIcon from '../../assets/loading-icon.svg';
import './loader.css';

const Loader = ({ open }) => {
	return open ? (
		<div className="loader-background">
			<img src={LoadingIcon} alt="Icone de loading" className="loader-image" />
		</div>
	) : null;
};

Loader.propTypes = {
	open: PropTypes.bool,
};

export default Loader;
