const validateCPF = (cpf) => {
	cpf = cpf.replace(/[^\d]+/g, ''); // remove caracteres não numéricos
	if (cpf.length !== 11) return false; // CPF deve ter 11 dígitos
	if (/^(\d)\1{10}$/.test(cpf)) return false; // CPF não pode ter todos os dígitos iguais
	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum += parseInt(cpf.charAt(i)) * (10 - i);
	}
	let remainder = sum % 11;
	let digit = remainder < 2 ? 0 : 11 - remainder;
	if (digit !== parseInt(cpf.charAt(9))) return false; // primeiro dígito verificador inválido
	sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += parseInt(cpf.charAt(i)) * (11 - i);
	}
	remainder = sum % 11;
	digit = remainder < 2 ? 0 : 11 - remainder;
	if (digit !== parseInt(cpf.charAt(10))) return false; // segundo dígito verificador inválido
	return true; // CPF válido
};

const validateInput = (type, value) => {
	switch (type) {
		case 'text':
			return value.length > 0;
		case 'number':
			return !isNaN(Number(value));
		case 'password':
			return value.length >= 8;
		case 'email':
			return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
		case 'phone':
			return /^\d{10}$/.test(value);
		case 'date':
			return /^\d{4}-\d{2}-\d{2}$/.test(value);
		case 'cpf':
			return validateCPF(value);
		default:
			return false;
	}
};

export default validateInput;
