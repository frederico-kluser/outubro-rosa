import { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import Warning from '../../components/warning';
import Template from '../../components/template';
import Radio from '../../components/radio';
import validateInput from '../../utils/validateInput';
import '../pages.css';
import '../pages-responsive.css';

const Register = () => {
	/*
    const { response, error, isLoading } = useAxios({
      url: '/auth/login',
      method: 'post',
      baseHeaders: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        username: 'admin',
        password: 'admin'
      },
      baseURL: true
    });
  */

	const [name, setName] = useState('');
	const [cpf, setCPF] = useState('');
	const [birthday, setBirthday] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [medicalOrder, setMedicalOrder] = useState(0);

	return (
		<Template>
			<div className="column-size">
				<h1>Faça o cadastro</h1>
				<div className="mt-24" />
				<p>
					Quem vai fazer exames tem <b>pedido médico</b>?
				</p>
				<div className="mt-8" />
				<Radio
					texts={['Sim', 'Não']}
					onChange={(value) => {
						setMedicalOrder(value);
					}}
					initialValue={medicalOrder}
				/>
				{medicalOrder === 1 && (
					<>
						<div className="mt-8" />
						<Warning
							color="green"
							text="Boa notícia! Agora, é possível fazer uma teleconsulta para solicitar os exames"
						/>
					</>
				)}
				<div className="mt-24 mobile" />
				<div className="mt-32 desktop" />
				<p>Conte mais sobre quem vai fazer exames</p>
				<div className="mt-16" />
				<div className="input-container">
					<Input placeholder="Nome completo" setValue={setName} type="text" value={name} />
					{medicalOrder === 1 && (
						<>
							<Input placeholder="CPF" setValue={setCPF} type="number" value={cpf} />
							<Input placeholder="Data de nascimento" setValue={setBirthday} type="number" value={birthday} />
						</>
					)}
					<Input caption="(DDD) + número" placeholder="Telefone" setValue={setPhone} type="phone" value={phone} />
					<Input caption="exemplo@nome.com" placeholder="E-mail" setValue={setEmail} type="email" value={email} />
				</div>
				{medicalOrder === 1 && (
					<>
						<div className="mt-8" />
						<p>Sexo biológico?</p>
						<div className="mt-8" />
						<Radio texts={['Feminino', 'Masculino']} onChange={() => {}} />
					</>
				)}
				<div className="mt-24" />
				<Button
					text="Continuar"
					isCondensed
					onClick={() => {
						// setPage('register-with-card-2');
					}}
					disabled={
						!validateInput('text', name) ||
						!validateInput('phone', phone) ||
						!validateInput('email', email) ||
						(medicalOrder === 1 && !validateInput('cpf', cpf)) ||
						(medicalOrder === 1 && !validateInput('date', birthday))
					}
				/>
			</div>
		</Template>
	);
};

export default Register;
