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

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		tdImc.textContent = "Peso invalido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValida) {
		tdImc.textContent += "Altura invalida!";
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
		tdImc.textContent = calculaImc(peso, altura);
	}


}

function validaPeso(peso){
	if (peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura < 1000) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}