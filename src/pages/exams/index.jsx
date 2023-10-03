/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import Template from '../../components/template';
import useAxios from '../../hooks/useAxios';
import '../pages-responsive.css';
import '../pages.css';

const clinicalAnalysis = [
	'Colesterol frações (LDL, VLDL, HDL)',
	'Colesterol total',
	'FSH',
	'Glicemia',
	'Hemograma',
	'T3',
	'T3L',
	'T4',
	'T4L',
	'TSH',
];

const Exams = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const navigate = useNavigate();
	const [url, setUrl] = useState('/unit/exams');
	const [data, setData] = useState({
		unit: locationState.unit.unit || '',
	});
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
	const [examsList, setExamsList] = useState([]);
	const [examsUsed, setExamsUsed] = useState([]);

	const { response, error, isLoading } = useAxios({
		url,
		method: 'post',
		baseHeaders: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data,
		baseURL: true,
	});

	const sendSchedule = async () => {
		setData({
			unit: locationState.unit._id,
			user: {
				name: locationState.name,
				email: locationState.email,
				phone: locationState.phone,
				cpf: locationState.cpf,
				birthdate: locationState.birthday,
				biologicalsex: locationState.gender,
			},
			clinicalAnalysis: [], // capturar checkboxs clicados
			exams: examsUsed,
		});
		setUrl('/schedule');
	};

	const getDuplicatedTimeExams = () => {
		const timeExamValues = new Set();
		const duplicates = [];

		examsUsed.forEach((exam) => {
			if (timeExamValues.has(exam.timeExam)) {
				duplicates.push(exam.timeExam);
			} else {
				timeExamValues.add(exam.timeExam);
			}
		});

		return duplicates;
	};

	const handleFinalizarClick = () => {
		const duplicatedTimeExams = getDuplicatedTimeExams();
		if (duplicatedTimeExams.length > 0) {
			setModalProps((prev) => ({
				...prev,
				title: 'Mais de um exame no mesmo horário',
				paragraph: `Os seguintes horários de exame estão repetidos: ${duplicatedTimeExams.join(', ')}`,
				buttonText: 'Ok',
				isError: true,
				open: true,
			}));
			return;
		}

		console.log(examsUsed);
		sendSchedule();
	};

	const componentListExams = () => {
		const handleCheckboxChange = (isChecked, examText) => {
			if (isChecked) {
				// Se o Checkbox for selecionado, adicione ou atualize o exame na lista
				setExamsUsed((prev) => {
					const updatedList = [...prev];
					const existingExam = updatedList.find((e) => e.exam === examText);
					const firstTimeExam = examsList.find((e) => e.exam === examText)?.timeExam[0] || '';

					if (!existingExam) {
						updatedList.push({ exam: examText, timeExam: firstTimeExam });
					} else {
						existingExam.timeExam = firstTimeExam; // atualize o timeExam se o exame já existir na lista
					}

					return updatedList;
				});
			} else {
				// Se o Checkbox for desmarcado, remova o exame da lista
				setExamsUsed((prev) => prev.filter((e) => e.exam !== examText));
			}
		};

		const handleRadioChange = (selectedTime, examText) => {
			setExamsUsed((prev) => {
				const updatedList = [...prev];
				const existingExam = updatedList.find((e) => e.exam === examText);

				if (existingExam) {
					existingExam.timeExam = selectedTime;
				}

				return updatedList;
			});
		};

		const isExamUsed = (examText) => {
			return examsUsed.some((e) => e.exam === examText);
		};

		return examsList.map((exam) => {
			return (
				<div key={exam.exam}>
					<Checkbox
						text={exam.exam}
						checked={isExamUsed(exam.exam)}
						onChange={(isChecked) => handleCheckboxChange(isChecked, exam.exam)}
					/>
					{isExamUsed(exam.exam) && (
						<>
							<div className="mt-8" />
							<Radio
								texts={exam.timeExam}
								onChange={(selectedTimeIndex) => {
									const actualSelectedTime = exam.timeExam[selectedTimeIndex];
									handleRadioChange(actualSelectedTime, exam.exam);
								}}
							/>
						</>
					)}
				</div>
			);
		});
	};

	useEffect(() => {
		console.log('locationState :', locationState);
		if (!locationState.name || !locationState.email || !locationState.phone || !locationState.unit) {
			navigate('/register');
		}
	}, [locationState]);

	useEffect(() => {
		console.log('isLoading :', isLoading);
		if (response && url === '/unit/exams') {
			setExamsList(response.data);
		}
		if (error && url === '/unit/exams') {
			console.log(error);
			setModalProps((prev) => ({
				...prev,
				title: 'Erro ao buscar exames',
				paragraph: 'Por favor, tente de novo',
				buttonText: 'Ok',
				isError: true,
				open: true,
			}));
		}

		if (response && url === '/schedule') {
			setModalProps((prev) => ({
				...prev,
				title: 'Pronto!',
				paragraph:
					'Para fazer a consulta, é só acessar o app Grupo Fleury - Saúde Digital nos dias 11 a 13 de outubro, a qualquer hora',
				buttonText: 'Ok, entendi',
				open: true,
				onClick: () => {
					setModalProps((prev) => ({ ...prev, open: false }));
					navigate('/register', {
						state: {},
					});
				},
			}));
		}
		if (error && url === '/schedule') {
			setModalProps((prev) => ({
				...prev,
				title: 'Erro ao enviar dados',
				paragraph: 'Por favor, tente de novo',
				buttonText: 'Ok',
				isError: true,
				open: true,
			}));
		}
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps} step={2} loader={isLoading}>
			<div className="column-size">
				<h2>Escolher exames</h2>
				<div className="mt-24" />
				<p>Confira o pedido médico e selecione os exames</p>
				<div className="mt-40" />
				<p>
					<b>Análises clínicas:</b>
				</p>
				<div className="mt-16" />
				<div className="gap-8">
					{clinicalAnalysis.map((exam) => (
						<Checkbox
							key={exam}
							text={exam}
							onChange={(isChecked) => {
								console.log(exam + ' : ' + isChecked);
							}}
						/>
					))}
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
				<div className="gap-16">{componentListExams()}</div>
				<div className="mt-24" />
				<Button text="Finalizar" isCondensed onClick={handleFinalizarClick} disabled={examsUsed.length === 0} />
			</div>
		</Template>
	);
};

export default Exams;
