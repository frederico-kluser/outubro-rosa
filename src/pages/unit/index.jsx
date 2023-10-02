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
	// _id, unit, acronymExam, e addressUnit
	const [units, setUnits] = useState([]);
	const [unitIndex, setUnitIndex] = useState(0);

	const [modalProps, setModalProps] = useState({
		title: '',
		paragraph: '',
		buttonText: '',
		callback: () => {
			setModalProps((prev) => ({ ...prev, open: false }));
		},
		open: false,
		isError: false,
	});

	const { response, error, isLoading } = useAxios({
		url: '/unit/distinct',
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
		console.log('isLoading :', isLoading);
		if (response) {
			console.log('setUnits: ', response);
			setUnits(response.data);
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
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps} step={1} loader={isLoading}>
			<div className="column-size">
				<h1>Local de atendimento</h1>
				<div className="mt-24" />
				<p>Escolha uma unidade:</p>
				<div className="mt-16" />
				<Radio
					titles={units.map((unit) => unit.unit || '')}
					texts={units.map((unit) => ` - ${unit.addressUnit || ''}`)}
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
						navigate('/exams', {
							state: { ...locationState, unit: units[unitIndex] },
						});
					}}
				/>
			</div>
		</Template>
	);
};

export default Unit;
