import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Template from '../../components/template';
import useAxios from '../../hooks/useAxios';
import { useLocation, useNavigate } from 'react-router-dom';
import Radio from '../../components/radio';
import Checkbox from '../../components/checkbox';
import '../pages.css';
import '../pages-responsive.css';

const Exams = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const navigate = useNavigate();

	const [url, setUrl] = useState('');
	const [modalProps, setModalProps] = useState({
		title: '',
		paragraph: '',
		buttonText: '',
		callback: () => {
			setModalProps((prev) => ({ ...prev, open: false }));
			setUrl('');
		},
		open: false,
		isError: false,
	});

	const { response, error, isLoading } = useAxios({
		url, // /schedule para pegar os exames, e depois outro para cadastrar
		method: 'post',
		baseHeaders: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data: {},
		baseURL: true,
	});

	useEffect(() => {
		console.log('locationState :', locationState);
		if (!locationState.name || !locationState.email || !locationState.phone || !locationState.unit) {
			navigate('/register');
		}
	}, [locationState]);

	useEffect(() => {
		if (url) {
			console.log('isLoading :', isLoading);
			if (response) {
				//
			}
			if (error) {
				console.log(error);
				setModalProps((prev) => ({
					...prev,
					title: 'Erro ao enviar dados',
					paragraph: 'Por favor, tente de novo',
					buttonText: 'Ok',
					isError: true,
					open: true,
				}));
			}
		}
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps}>
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
				<Button text="Continuar" isCondensed onClick={() => {}} />
			</div>
		</Template>
	);
};

export default Exams;
