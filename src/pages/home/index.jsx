import { useEffect, useState } from 'react';
import OutubroRosaPromo from '../../assets/outubro-rosa-promo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Warning from '../../components/warning';
import Template from '../../components/template';
import validateInput from '../../utils/validateInput';
import useAxios from '../../hooks/useAxios';
import '../pages.css';
import '../pages-responsive.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);
	const [url, setUrl] = useState(''); // '/auth/login'
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
					title: 'Dados incorretos',
					paragraph: 'Por favor, tente de novo',
					buttonText: 'Ok',
					isError: true,
					open: true,
				}));
			}
		}
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps}>
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
						{/* <Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail} type="email" value={email} /> */}
						<Input caption="user 'admin'" placeholder="E-mail" setValue={setEmail} type="text" value={email} />
						<Input
							caption="user 'password123'"
							placeholder="Senha"
							setValue={setPassword}
							type="password"
							value={password}
						/>
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

/* {page === 'register-with-card-2' && (
				<div className="column-size">
					<h1>Local de atendimento</h1>
					<div className="mt-24" />
					<p>Escolha uma unidade:</p>
					<div className="mt-16" />
					<Radio
						texts={[
							'Fleury Alameda Jaú, Al. Jaú, 1725 - Jardim Paulista',
							'Fleury República do Líbano I, Av. República do Líbano, 635 - Ibirapuera',
							'a+ Paraíso, Rua do Paraíso, 450 - Paraíso',
						]}
						onChange={() => {
							console.log('oi');
						}}
						vertical
					/>
					<div className="mt-24" />
					<Button
						text="Continuar"
						isCondensed
						onClick={() => {
							setPage('register-with-card-3');
						}}
					/>
				</div>
			)}
			{page === 'register-with-card-3' && (
				<div className="column-size">
					<h1>Escolher exames</h1>
					<div className="mt-24" />
					<p>Confira o pedido médico e selecione os exames</p>
					<div className="mt-40" />
					<p>
						<b>Análises clínicas:</b>
					</p>
					<div className="mt-16" />
					<div className="gap-8">
						<Checkbox text="Colesterol frações (LDL, VLDL, HDL)" onChange={() => {}} />
						<Checkbox text="Colesterol total" onChange={() => {}} />
						<Checkbox text="FSH" onChange={() => {}} />
						<Checkbox text="Glicemia" onChange={() => {}} />
						<Checkbox text="Hemograma" onChange={() => {}} />
						<Checkbox text="T3" onChange={() => {}} />
						<Checkbox text="T3L" onChange={() => {}} />
						<Checkbox text="T4" onChange={() => {}} />
						<Checkbox text="T4L" onChange={() => {}} />
						<Checkbox text="TSH" onChange={() => {}} />
					</div>
					<div className="mt-24" />
					<p>Escolha uma hora para esses exames</p>
					<div className="mt-8" />
					<Radio texts={['10h20', '10h40', '11h00', '11h20']} onChange={() => {}} />
					<div className="mt-40" />
					<p>
						<b>Exames de imagem:</b>
					</p>
					<div className="mt-16" />
					<div className="gap-16">
						<div>
							<Checkbox text="Mamografia" onChange={() => {}} />
							<div className="mt-8" />
						</div>
						<Radio texts={['10h20', '10h40', '11h00', '11h20']} onChange={() => {}} />
						<Checkbox text="USG Abdome superior" onChange={() => {}} />
						<div>
							<Checkbox text="USG Abdome total" onChange={() => {}} />
							<div className="mt-8" />
							<Radio texts={['10h20', '10h40', '11h00', '11h20']} onChange={() => {}} />
						</div>
						<Checkbox text="USG Mamas" onChange={() => {}} />
						<Checkbox text="USG Tato urinário ou pelve" onChange={() => {}} />
						<Checkbox text="USG Transvaginal" onChange={() => {}} />
						<Checkbox text="USG Tireóide" onChange={() => {}} />
					</div>
					<div className="mt-24" />
					<Button
						text="Continuar"
						isCondensed
						onClick={() => {
							setPage('register-without-card');
						}}
					/>
				</div>
			)} */

export default Home;
