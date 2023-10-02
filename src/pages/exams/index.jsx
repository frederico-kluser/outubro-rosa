/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import Template from '../../components/template';
import useAxios from '../../hooks/useAxios';
import '../pages-responsive.css';
import '../pages.css';

const Exams = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const navigate = useNavigate();
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
		url: '/unit/exams', // /schedule para pegar os exames, e depois outro para cadastrar
		method: 'post',
		baseHeaders: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data: {
			unit: locationState.unit.unit || '',
		},
		baseURL: true,
	});

	const sendSchedule = async () => {
		const body = {
			unit: locationState.unit._id,
			user: {
				name: locationState.name,
				email: locationState.email,
				phone: locationState.phone,
				cpf: locationState.cpf,
				birthdate: locationState.birthday,
				biologicalsex: locationState.gender,
			},
			clinicalAnalysis: [],
			exams: examsUsed,
		};
		try {
			await axios
				.post(`${import.meta.env.VITE_URL}/schedule`, body, {
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': Cookies.get('token') || '',
					},
				})
				.then((response) => {
					if (response) {
						setModalProps((prev) => ({
							...prev,
							title: 'Pronto!',
							paragraph:
								'Para fazer a consulta, é só acessar o app Grupo Fleury - Saúde Digital nos dias 11 a 13 de outubro, a qualquer hora',
							buttonText: 'Ok, entendi',
							open: true,
						}));
						navigate('/', {
							state: {},
						});
					}
				})
				.catch((error) => {
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
				});
		} catch (error) {
			setModalProps((prev) => ({
				...prev,
				title: 'Erro ao enviar dados',
				paragraph: 'Por favor, tente de novo',
				buttonText: 'Ok',
				isError: true,
				open: true,
			}));
			console.log(999, `Erro: ${error}`);
		}
	};

	const hasAtLeastOneTimeExamUsed = () => {
		return examsUsed.length > 0;
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
		if (!hasAtLeastOneTimeExamUsed()) {
			alert('Por favor, selecione pelo menos um exame!');
			return;
		}

		const duplicatedTimeExams = getDuplicatedTimeExams();
		if (duplicatedTimeExams.length > 0) {
			alert(
				`Os seguintes horários de exame estão repetidos: ${duplicatedTimeExams.join(
					', ',
				)}, por favor, não selecione o mesmo horário para mais de um exame!`,
			);
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
		if (response) {
			setExamsList(response.data);
		}
		if (error) {
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
	}, [response, error, isLoading]);

	return (
		<Template modalProps={modalProps} step={2} loader={isLoading}>
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
				<div className="gap-16">{componentListExams()}</div>
				<div className="mt-24" />
				<Button text="Finalizar" isCondensed onClick={handleFinalizarClick} />
			</div>
		</Template>
	);
};

export default Exams;
