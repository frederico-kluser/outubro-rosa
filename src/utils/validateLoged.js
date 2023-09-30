import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function validateLoged() {
	const navigate = useNavigate();
	const token = Cookies.get('token');

	if (!token) {
		navigate('/');
	}
}

export default validateLoged;
