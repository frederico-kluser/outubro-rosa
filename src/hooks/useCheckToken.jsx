import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const UseCheckToken = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const token = Cookies.get('token');

	useEffect(() => {
		console.log('location :', location);
		console.log('token :', token);

		if (location.pathname !== '/') {
			if (!token) {
				navigate('/');
			}
		} else {
			if (token) {
				navigate('/register');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	return <>{children}</>;
};

UseCheckToken.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UseCheckToken;
