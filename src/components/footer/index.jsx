import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import Container from '../container';
import './footer.css';
import './footer-response.css';

const Footer = () => (
	<footer className="fleury-footer">
		<Container>
			<img alt="Grupo Fleury" className="image-fleury-logo clickEffect" src={FleuryLogo} />
			<p className="fleury-footer-text desktop">
				Feito com ❤️ por Grupo Fleury - Todos os Direitos Reservados | <b>Política de Privacidade</b> | © 2023
			</p>
			<p className="fleury-footer-text mobile">Feito com ❤️ por Grupo Fleury - Todos os Direitos</p>
			<p className="fleury-footer-text mobile">
				Reservados | <b>Política de Privacidade</b> | © 2023
			</p>
		</Container>
	</footer>
);

export default Footer;
