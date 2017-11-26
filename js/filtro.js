var campoFiltro = document.querySelector("#filtrar-tabela");
//console.log(campoFiltro);

campoFiltro.addEventListener("input", function(){
	//console.log(this.value);
	
	var trPacientes = document.querySelectorAll(".paciente");

	if (this.value.length > 0) {
		console.log("aqui");
		for (var i = 0; i < trPacientes.length; i++){

			var paciente = trPacientes[i];
			var tdPacientes = paciente.querySelector(".info-nome");
			var nomePaciente = tdPacientes.textContent;

			if (nomePaciente != this.value) {
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}
		}
	} else {
		for (var i = 0; i < trPacientes.length; i++){

			var paciente = trPacientes[i];

			paciente.classList.remove("invisivel");
		}
	}


});