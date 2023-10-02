import FleuryLogo from '../../assets/grupo-fleury-logo.svg';
import Container from '../container';
import './footer.css';
import './footer-response.css';
import changeLink from '../../utils/changeLink';

const Footer = () => (
	<footer className="fleury-footer">
		<Container>
			<img
				alt="Grupo Fleury"
				className="image-fleury-logo clickEffect"
				src={FleuryLogo}
				onClick={() => {
					changeLink('https://www.grupofleury.com.br');
				}}
			/>
			<p className="fleury-footer-text desktop">
				Feito com ❤️ por Grupo Fleury - Todos os Direitos Reservados |&nbsp;
				<a
					href="https://dpo.privacytools.com.br/policy-view/AynyEq4GV/1/política-de-privacidade/pt_BR?s=1670867684492"
					target="_blank"
					rel="noreferrer"
				>
					<b>Política de Privacidade</b>
				</a>
				&nbsp;| © 2023
			</p>
			<p className="fleury-footer-text mobile">Feito com ❤️ por Grupo Fleury - Todos os Direitos</p>
			<p className="fleury-footer-text mobile">
				Reservados |&nbsp;
				<a
					href="https://dpo.privacytools.com.br/policy-view/AynyEq4GV/1/política-de-privacidade/pt_BR?s=1670867684492"
					target="_blank"
					rel="noreferrer"
				>
					<b>Política de Privacidade</b>
				</a>
				&nbsp;| © 2023
			</p>
		</Container>
	</footer>
);

export default Footer;
