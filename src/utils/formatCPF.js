const formatCPF = (cpf) => {
	cpf = cpf.replace(/[^\d]+/g, ''); // remove caracteres não numéricos
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // adiciona pontos e traço
};

export default formatCPF;
