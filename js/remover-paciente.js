/*
-- Funciona, mas da erro ao adicionar novos, ja que ele esta escutando somente as TRS que foram adicionadas assim que o documento foi carregado

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(){
		console.log("double click");
		this.remove();
	});
});
*/

// Agora ele passa a escutar tudo dentro da table, ja que estamos adicionando o listener na tbody
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

	// como se eu remover este elemento, eu removo a table por completo, devo encontrar o target do click, para buscar a tr e remover

	var alvoEvento = event.target; // pega a TD que recebeu o duplo click
	var paiDoAlvo = alvoEvento.parentNode; // volta um nó anterior e encontra a Tr pai da td/
	paiDoAlvo.remove(); // remove a linha
})