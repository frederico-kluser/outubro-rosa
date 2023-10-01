import Cookies from 'js-cookie';
import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import OutubroRosaLogo from '../../assets/outubro-rosa-logo.png';
import MenuIcon from '../../assets/menu-icon.svg';
import ExitIcon from '../../assets/exit-icon.svg';
import FileIcon from '../../assets/file-icon.svg';
import Button from '../button';
import Container from '../container';
import './header.css';
import './header-responsive.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import changeLink from '../../utils/changeLink';

const Header = () => {
	const navigate = useNavigate();
	const [opened, setOpened] = useState(false);
	const [showExitButton, setShowExitButton] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== '/') {
			setShowExitButton(true);
		}
	}, [location]);

	const exitFunction = () => {
		Cookies.remove('token');
		navigate('/');
	};

	return (
		<>
			<div className={`menu-mobile mobile ${opened && 'opened'}`}>
				<h1 className="title">Menu</h1>
				<div className="menu-item clickEffect">
					<img src={FileIcon} alt="Icone de instruções de preparo" />
					<p>Preparo de exames</p>
				</div>
				<div className="separator"></div>
				{showExitButton && (
					<div className="menu-item-red clickEffect" onClick={exitFunction}>
						<img src={ExitIcon} alt="Icone de sair" />
						<p>Sair</p>
					</div>
				)}
			</div>
			<header className="fleury-header">
				<Container>
					<div className="logos-container">
						<div className="logo-container">
							<img
								alt="Grupo Fleury"
								className="image-fleury-logo clickEffect"
								src={FleuryLogo}
								onClick={() => {
									changeLink('https://www.grupofleury.com.br');
								}}
							/>
							<div className="horizontal-divisor" />
						</div>
						<img
							alt="Outubro Rosa Logo"
							className="image-outubro-rosa-logo clickEffect"
							src={OutubroRosaLogo}
							onClick={() => {
								changeLink('https://www.gov.br/inca/pt-br/assuntos/campanhas/2022/outubro-rosa');
							}}
						/>
					</div>
					<div className="buttons-container">
						<Button text="Instruções de preparo" isOutline />
						{showExitButton && <Button text="Sair" iconName="exit" isLink onClick={exitFunction} />}
						{/* <Button text="Sair" iconName="exit" isLink disabled /> */}
					</div>
					<div className="menu-container">
						<img
							alt="Menu Icone"
							className={`clickEffect ${opened && 'rotate'}`}
							src={MenuIcon}
							onClick={() => {
								setOpened(!opened);
							}}
						/>
					</div>
				</Container>
			</header>
		</>
	);
};

export default Header;
