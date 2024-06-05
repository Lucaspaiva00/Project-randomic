var val1 = 0, val2 = 0, temp = 0;
var oper = "";
var control = 0;

function escreve(valor){
	if(valor != '.'){
		document.getElementById("in").value += valor;
	}else{
		var info = document.getElementById("in").value;
		if(info.indexOf('.') == -1){
			if(info == ""){
				document.getElementById("in").value += "0" + valor;
			}else{
				document.getElementById("in").value += valor;
			}
		}
	}
}

function limpa(){
	val1 = 0;
	val2 = 0;
	temp = 0;
	oper = 0;
	document.getElementById("in").value = "";
}

function operacao(opera){
	oper = opera;
	if(control == 0){
		val1 = parseFloat(document.getElementById("in").value);
		document.getElementById("in").value = "";
		control = 1;
	}else{
		val1 = calc(0);
		document.getElementById("in").value = "";
	}
}

function calc(i){
	val2 = parseFloat(document.getElementById("in").value);
	var res = 0;
	switch(oper){
		case "+":
			res = val1 + val2;
			break;
		case "-":
			res = val1 - val2;
			break;
		case "*":
			res = val1 * val2;
			break;
		case "/":
			res = val1 / val2;
			break;
	}
	document.getElementById("in").value = res;
	if(i == 1){
		control = 0;
	}
	return res;
}

function apagaUltimo(){
	var val = document.getElementById("in").value;
	var tam = val.length;
	document.getElementById("in").value = val.substring(0, tam-1);
}
