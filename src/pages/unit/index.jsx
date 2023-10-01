import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Template from '../../components/template';
import useAxios from '../../hooks/useAxios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../pages.css';
import '../pages-responsive.css';
import Radio from '../../components/radio';

const Unit = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const navigate = useNavigate();

	const [url, setUrl] = useState('');
	const [units, setUnits] = useState([
		{
			unit: 'Fleury Alameda Jaú, Al. Jaú, 1725 - Jardim Paulista',
			room: 0,
			acronymExam: 'string',
			timeExam: 'string',
			availableQuantity: 0,
			exam: 'string',
		},
		{
			unit: 'Fleury República do Líbano I, Av. República do Líbano, 635 - Ibirapuera',
			room: 0,
			acronymExam: 'string',
			timeExam: 'string',
			availableQuantity: 0,
			exam: 'string',
		},
		{
			unit: 'a+ Paraíso, Rua do Paraíso, 450 - Paraíso',
			room: 0,
			acronymExam: 'string',
			timeExam: 'string',
			availableQuantity: 0,
			exam: 'string',
		},
	]);
	const [unitIndex, setUnitIndex] = useState(0);

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
		url: '/unit',
		method: 'get',
		baseHeaders: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		baseURL: true,
	});

	useEffect(() => {
		console.log('locationState :', locationState);
		if (!locationState.name || !locationState.email || !locationState.phone) {
			navigate('/register');
		}
	}, [locationState]);

	useEffect(() => {
		if (url) {
			console.log('isLoading :', isLoading);
			if (response) {
				setUnits(response.data);
				/*
          [
            {
              "unit": "string",
              "room": 0,
              "acronymExam": "string",
              "timeExam": "string",
              "availableQuantity": 0,
              "exam": "string"
            }
          ]
        */
			}
			if (error) {
				console.log(error);
				setModalProps((prev) => ({
					...prev,
					title: 'Erro ao buscar unidades',
					paragraph: 'Por favor, tente de novo',
					buttonText: 'Ok',
					isError: true,
					open: true,
				}));
			}
		}
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps} step={1}>
			<div className="column-size">
				<h1>Local de atendimento</h1>
				<div className="mt-24" />
				<p>Escolha uma unidade:</p>
				<div className="mt-16" />
				<Radio
					texts={units.map((unit) => unit.unit)}
					onChange={(value) => {
						setUnitIndex(value);
					}}
					vertical
					initialValue={unitIndex}
				/>
				<div className="mt-24" />
				<Button
					text="Continuar"
					isCondensed
					onClick={() => {
						navigate('/exams', { state: { ...locationState, unit: units[unitIndex] } });
					}}
				/>
			</div>
		</Template>
	);
};

export default Unit;
