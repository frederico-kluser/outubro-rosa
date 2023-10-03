import { useEffect, useState } from 'react';
import OutubroRosaPromo from '../../assets/outubro-rosa-promo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Warning from '../../components/warning';
import Template from '../../components/template';
import validateInput from '../../utils/validateInput';
import useAxios from '../../hooks/useAxios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../pages.css';
import '../pages-responsive.css';

const Home = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);
	const [url, setUrl] = useState('');
	const [modalProps, setModalProps] = useState({
		title: '',
		paragraph: '',
		buttonText: '',
		callback: () => {
			setModalProps((prev) => ({ ...prev, open: false }));
			setUrl('');
		},
		open: false,
		isError: false,
	});

	const { response, error, isLoading } = useAxios({
		url,
		method: 'post',
		baseHeaders: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data: {
			username: email,
			password,
		},
		baseURL: true,
	});

	useEffect(() => {
		if (url) {
			console.log('isLoading :', isLoading);
			if (response) {
				Cookies.set('token', response.data.token);
				navigate('/register');
			}
			if (error) {
				console.log(error);
				setLoginError(true);
				setModalProps((prev) => ({
					...prev,
					title: 'Erro ao enviar dados',
					paragraph: 'Por favor, tente de novo',
					buttonText: 'Ok',
					isError: true,
					open: true,
				}));
			}
		}
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps} loader={url && isLoading}>
			<div className="column-size">
				<h1>Outubro Rosa</h1>
				<div className="mt-24 mobile" />
				<div className="container-promo mobile">
					<div className="background"></div>
					<div
						className="image"
						style={{
							backgroundImage: `url(${OutubroRosaPromo})`,
						}}
					></div>
				</div>
				{loginError ? (
					<>
						<div className="mt-24" />
						<Warning text="Dados incorretos. Por favor, tente de novo" />
						<div className="mt-16 desktop" />
						<div className="mt-24 mobile" />
					</>
				) : (
					<>
						<div className="mt-24 mobile" />
						<div className="mt-32 desktop" />
					</>
				)}
				<div className="container-16">
					<p>Vamos começar com o e-mail e a senha</p>
					<div className="input-container">
						{/* <Input placeholder="E-mail" setValue={setEmail} type="email" value={email} /> */}
						<Input placeholder="E-mail" setValue={setEmail} type="text" value={email} />
						<Input placeholder="Senha" setValue={setPassword} type="password" value={password} />
					</div>
					<Button
						text="Entrar"
						isCondensed
						onClick={() => {
							setUrl('/auth/login');
						}}
						// disabled={!validateInput('email', email) || !validateInput('password', password)}
						disabled={!validateInput('text', email) || !validateInput('password', password)}
					/>
				</div>
			</div>
			<div className="column-size reverse">
				<div className="container-promo">
					<div className="background"></div>
					<div
						className="image"
						style={{
							backgroundImage: `url(${OutubroRosaPromo})`,
						}}
					></div>
				</div>
			</div>
		</Template>
	);
};

export default Home;
