//alert("TESTE");
function lancar(){
	
	var nome = document.getElementById("nome").value;
	var matricula = document.getElementById("matricula").value;
	var nota1 = parseFloat(document.getElementById("n1").value);
	var nota2 = parseFloat(document.getElementById("n2").value);
	var nota3 = parseFloat(document.getElementById("n3").value);
	
	var media = (nota1 + nota2 + nota3)/3;
	
	var status = "Reprovado";
	
	if(media >= 5){
		status = "Aprovado";
	}
	
	var linha = "<tr>" +
					"<td>" + nome + "</td>" +
					"<td>" + matricula + "</td>" +
					"<td>" + media + "</td>" +
					"<td>" + status + "</td>" +
				"</tr>";
				
	var tbody = document.getElementById("info");
	
	tbody.innerHTML = tbody.innerHTML + linha;
	
}