function tecla(numero) {
	var k = document.calcula.mostra.value;
	document.calcula.mostra.value = k + numero;	
}
function limp(){
	document.getElementById("mostrar").value = "";
}

function calcule(){
	var resultado = 0;
	resultado = document.getElementById('mostrar').value;
	document.getElementById('mostrar').value = '';
	document.getElementById('mostrar').value = eval(resultado);
}
function raiz() {
	var raizex =document.calcula.mostra.value
	if(raizex) {
		document.calcula.mostra.value=Math.sqrt(raizex);
	}
	}

