import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import OutubroRosaLogo from '../../assets/outubro-rosa-logo.png';
import Button from '../button';
import Container from '../container';
import './header.css';

const Header = () => (
	<header className="fleury-header">
		<Container>
			<div className="logos-container">
				<div className="logo-container">
					<img alt="Grupo Fleury" className="image-fleury-logo" src={FleuryLogo} />
					<div className="horizontal-divisor" />
				</div>
				<img alt="Outubro Rosa Logo" className="image-outubro-rosa-logo" src={OutubroRosaLogo} />
			</div>
			<div className="buttons-container">
				<Button text="Instruções de preparo" isOutline />
				<Button text="Entrar" />
			</div>
		</Container>
	</header>
);

export default Header;
