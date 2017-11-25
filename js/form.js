
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault(); // Evita o comportamento padrao de um botao, que é o submit do form; tira a necessidade do type button
	
	console.log("evento click");

	var form = document.querySelector("#form-adiciona");

	var paciente =  obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();


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

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}