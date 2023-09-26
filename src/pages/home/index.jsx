import { useState } from 'react';
import OutubroRosaPromo from '../../assets/outubro-rosa-promo.jpeg';
import Input from '../../components/input';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import Warning from '../../components/warning';
import Template from '../../components/template';
import './home.css';
import './home-responsive.css';
import Radio from '../../components/radio';

const Home = () => {
	const [page, setPage] = useState('login');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error] = useState(false);

	const [name, setName] = useState('');
	const [cpf, setCPF] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phone, setPhone] = useState('');
	const [email2, setEmail2] = useState('');

	return (
		<Template>
			{page === 'login' && (
				<>
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
									setPage('register-with-card-1');
								}}
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
				</>
			)}
			{page === 'register-with-card-1' && (
				<div className="column-size">
					<h1>Faça o cadastro</h1>
					<div className="mt-24" />
					<p>
						Quem vai fazer exames tem <b>pedido médico</b>?
					</p>
					<div className="mt-8" />
					<Radio texts={['Sim', 'Não']} onChange={() => {}} />
					<div className="mt-24 mobile" />
					<div className="mt-32 desktop" />
					<p>Conte mais sobre quem vai fazer exames</p>
					<div className="mt-16" />
					<div className="input-container">
						<Input placeholder="Nome completo" setValue={setName} type="text" value={name} />
						<Input caption="(DDD) + número" placeholder="Telefone" setValue={setPhone} type="phone" value={phone} />
						<Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail2} type="email" value={email2} />
					</div>
					<div className="mt-24" />
					<Button
						text="Continuar"
						isCondensed
						onClick={() => {
							setPage('register-with-card-2');
						}}
					/>
				</div>
			)}
			{page === 'register-with-card-2' && (
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
					<Checkbox text="Mamografia" onChange={() => {}} />
					<div className="mt-8" />
					<Radio texts={['10h20', '10h40', '11h00', '11h20']} onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Abdome superior" onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Abdome total" onChange={() => {}} />
					<div className="mt-8" />
					<Radio texts={['10h20', '10h40', '11h00', '11h20']} onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Mamas" onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Tato urinário ou pelve" onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Transvaginal" onChange={() => {}} />
					<div className="mt-16" />
					<Checkbox text="USG Tireóide" onChange={() => {}} />
					<div className="mt-24" />
					<Button
						text="Continuar"
						isCondensed
						onClick={() => {
							setPage('register-without-card');
						}}
					/>
				</div>
			)}
			{page === 'register-without-card' && (
				<div className="column-size">
					<h1>Faça o cadastro</h1>
					<div className="mt-24" />
					<p>
						Quem vai fazer exames tem <b>pedido médico</b>?
					</p>
					<div className="mt-8" />
					<Radio texts={['Sim', 'Não']} onChange={() => {}} />
					<div className="mt-8" />
					<Warning
						color="green"
						text="Boa notícia! Agora, é possível fazer uma teleconsulta para solicitar os exames"
					/>
					<div className="mt-32 desktop" />
					<div className="mt-24 mobile" />
					<p>Conte mais sobre quem vai fazer exames</p>
					<div className="mt-16" />
					<div className="input-container">
						<Input placeholder="Nome completo" setValue={setName} type="text" value={name} />
						<Input placeholder="CPF" setValue={setCPF} type="number" value={cpf} />
						<Input placeholder="Data de nascimento" setValue={setBirthday} type="number" value={birthday} />
						<Input caption="(DDD) + número" placeholder="Telefone" setValue={setPhone} type="phone" value={phone} />
						<Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail2} type="email" value={email2} />
					</div>
					<div className="mt-8" />
					<p>Sexo biológico?</p>
					<div className="mt-8" />
					<Radio texts={['Feminino', 'Masculino']} onChange={() => {}} />
					<div className="mt-24" />
					<Button
						text="Continuar"
						isCondensed
						onClick={() => {
							setPage('login');
						}}
					/>
				</div>
			)}
		</Template>
	);
};

export default Home;
