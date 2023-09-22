import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import OutubroRosaLogo from '../../assets/outubro-rosa-logo.png';
import MenuIcon from '../../assets/menu.svg';
import Button from '../button';
import Container from '../container';
import './header.css';
import './header-responsive.css';

const Header = () => (
	<header className="fleury-header">
		<Container>
			<div className="logos-container">
				<div className="logo-container">
					<img alt="Grupo Fleury" className="image-fleury-logo clickEffect" src={FleuryLogo} />
					<div className="horizontal-divisor" />
				</div>
				<img alt="Outubro Rosa Logo" className="image-outubro-rosa-logo clickEffect" src={OutubroRosaLogo} />
			</div>
			<div className="buttons-container">
				<Button text="Instruções de preparo" isOutline />
				<Button text="Sair" iconName="exit" isLink />
				{/* <Button text="Sair" iconName="exit" isLink disabled /> */}
			</div>
			<div className="menu-container">
				<img alt="Menu Icone" className="clickEffect" src={MenuIcon} />
			</div>
		</Container>
	</header>
);

export default Header;
