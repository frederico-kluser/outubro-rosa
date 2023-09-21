import { useState } from 'react';
import OutubroRosaPromo from '../../assets/outubro-rosa-promo.jpeg';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Container from '../../components/container';
import Input from '../../components/input';
import Button from '../../components/button';
import './home.css';

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
							<Button text="Entrar" isCondensed />
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
							{/* <img src={OutubroRosaPromo} alt="Outubro Rosa Promotion Image" /> */}
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
