import { useState } from 'react';
import OutubroRosaPromo from '../../assets/outubro-rosa-promo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Warning from '../../components/warning';
import Template from '../../components/template';
import validateInput from '../../utils/validateInput';
import '../pages.css';
import '../pages-responsive.css';

const Home = () => {
	/*
    const { response, error, isLoading } = useAxios({
      url: '/auth/login',
      method: 'post',
      baseHeaders: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        username: 'admin',
        password: 'admin'
      },
      baseURL: true
    });
  */

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error] = useState(false);

	return (
		<Template>
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
				{error ? (
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
						<Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail} type="email" value={email} />
						<Input placeholder="Senha" setValue={setPassword} type="password" value={password} />
					</div>
					<Button
						text="Entrar"
						isCondensed
						onClick={() => {
							// setPage('register-with-card-1');
						}}
						disabled={!validateInput('email', email) || !validateInput('password', password)}
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

{
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
}

export default Home;
