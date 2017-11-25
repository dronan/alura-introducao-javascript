
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault(); // Evita o comportamento padrao de um botao, que é o submit do form; tira a necessidade do type button
	
	console.log("evento click");

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value; // propriedade name do input presente no form
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var pesoTd = document.createElement("td");
	var nomeTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);


});
