var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	//console.log(pacientes[i]);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
		tdImc.textContent = "Peso invalido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		tdImc.textContent += "Altura invalida!";
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
		var imc = (peso / (altura * altura));
		tdImc.textContent = imc.toFixed(2);
	}


}

// titulo.addEventListener("click", mostraMensagem);

// titulo.addEventListener("click", mostraMensagem()); -- Assim da erro, pq ele espera o retorno da função, que não retorna neste caso.


titulo.addEventListener("click", function(){
	console.log("funcao anonima");
});

function mostraMensagem(){
	console.log("mensagem");
}

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
	
	//var imc = (peso / (altura * altura));
	//imcTd.textContent = imc.toFixed(2);

	//imcTd.textContent = 0;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);


});

/* 
-- testes
botaoAdicionar.addEventListener("click", funcaoX);
botaoAdicionar.addEventListener("click", funcaoY);

function funcaoX(){
	alert("X");
}

function funcaoY(){
	alert("Y");
}
*/