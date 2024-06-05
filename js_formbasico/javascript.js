function cadastrar(){
	
	var nome = document.getElementById("nome").value;
	var endereco = document.getElementById("end").value;
	var dataNasc = document.getElementById("nasc").value;
	var doc = document.getElementById("doc").value;
	var lista = document.getElementById("cargo");
	var cargo = lista.options[lista.selectedIndex].value;
	
	var info = "<h1>Nome : " + nome + "</h1>" +
			   "<h1>Endereço : " + endereco + "</h1>" +
			   "<h1>Data de Nascimento : " + dataNasc + "</h1>" +
			   "<h1>CPF : " + doc + "</h1>" + 
			   "<h1>Cargo : " + cargo + "</h1>";
	   
	var para = document.getElementById("infoFunc");
	
	para.innerHTML = info;
			   
}