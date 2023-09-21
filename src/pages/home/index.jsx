import './home.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Container from '../../components/container';
import Input from '../../components/input';
import { useState } from 'react';

const Home = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			<Header />
			<section className="body">
				<Container>
					<div className="column-size">
						<h1>Outubro Rosa</h1>
						<div className="mt-32" />
						<div className="container-16">
							<p>Vamos começar com o e-mail e a senha</p>
							<div className="input-container">
								<Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail} type="email" value={email} />
								<Input placeholder="Senha" setValue={setPassword} type="password" value={password} />
							</div>
							<button className="button">Entrar</button>
						</div>
					</div>
					<div></div>
				</Container>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
