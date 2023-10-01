import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Template from '../../components/template';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import '../pages.css';
import '../pages-responsive.css';
import Radio from '../../components/radio';

const Unit = () => {
	const navigate = useNavigate();

	const [url, setUrl] = useState('');
	const [units, setUnits] = useState([]);
	const [unitIndex, setUnitIndex] = useState(-1);

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
		<Template modalProps={modalProps}>
			<div className="column-size">
				<h1>Local de atendimento</h1>
				<div className="mt-24" />
				<p>Escolha uma unidade:</p>
				<div className="mt-16" />
				<Radio
					texts={[
						'Fleury Alameda Jaú, Al. Jaú, 1725 - Jardim Paulista',
						'Fleury República do Líbano I, Av. República do Líbano, 635 - Ibirapuera',
						'a+ Paraíso, Rua do Paraíso, 450 - Paraíso',
					]}
					onChange={(value) => {
						setUnitIndex(value);
					}}
					vertical
				/>
				<div className="mt-24" />
				<Button
					text="Continuar"
					isCondensed
					onClick={() => {
						navigate('/exams', { state: { unit: units[unitIndex] } });
					}}
				/>
			</div>
		</Template>
	);
};

export default Unit;
