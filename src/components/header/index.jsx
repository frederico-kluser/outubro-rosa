import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import OutubroRosaLogo from '../../assets/outubro-rosa-logo.png';
import MenuIcon from '../../assets/menu-icon.svg';
import ExitIcon from '../../assets/exit-icon.svg';
import FileIcon from '../../assets/file-icon.svg';
import Button from '../button';
import Container from '../container';
import './header.css';
import './header-responsive.css';
import { useState } from 'react';

const Header = () => {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<div className={`menu-mobile mobile ${opened && 'opened'}`}>
				<h1 className="title">Menu</h1>
				<div className="menu-item clickEffect">
					<img src={FileIcon} alt="Icone de instruções de preparo" />
					<p>Preparo de exames</p>
				</div>
				<div className="separator"></div>
				<div className="menu-item-red clickEffect">
					<img src={ExitIcon} alt="Icone de sair" />
					<p>Sair</p>
				</div>
			</div>
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
