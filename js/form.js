
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault(); // Evita o comportamento padrao de um botao, que é o submit do form; tira a necessidade do type button
	
	console.log("evento click");

	var form = document.querySelector("#form-adiciona");

	var paciente =  obtemPacienteDoFormulario(form);

	var pacienteTr = document.createElement("tr");

	var pesoTd = document.createElement("td");
	var nomeTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);


});

function obtemPacienteDoFormulario(form){

	var paciente = { // objeto paciente
		nome : form.nome.value, // propriedade name do input presente no form
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}