$(document).ready(function(){
	
	$("#doc").change(function(){
		
		var file = document.getElementById("doc").files[0];
		var fileReader = new FileReader();
		fileReader.readAsText(file);
		fileReader.onload = function(){
			var linhas = fileReader.result.split("\r\n");
			var info;
			var linha;
			for(var i = 0; i < linhas.length; i++){
				info = linhas[i].split(";");
				linha = "<tr>" +
						"<td>" + info[0] + "</td>" +
						"<td>" + info[1] + "</td>" +
						"<td>" + info[2] + "</td>" +
						"<td>" + info[3] + "</td>" +
						"<td><input type=\"button\" value=\"Excluir\" onclick=\"excluir("+i+");\" />" +
						"</td>" +
						"</tr>";
				$("#tabela > tbody").append(linha);
			}
		};
		
	});
	
	$("#busca").keyup(function(){
		
		var busca = $("#busca").val();
		
		var tabela = $("#tabela");
		
		var infoNome;
		
		tabela.find("tbody > tr").each(function(){
			infoNome = $(this).find("td").eq(0).text();
			if(infoNome.includes(busca)){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
		
	});
	
});


function excluir(index){
	
	//alert($("#tabela > tbody > tr").eq(index).text());	
	$("#tabela > tbody > tr").eq(index).remove();
	ordenar();

}

function ordenar(){
	
	var lista = new Array();
	var nome;
	var matricula;
	var telefone;
	var endereco;
	var linha;
	
	$("#tabela > tbody > tr").each(function(){
		nome = $(this).find("td").eq(0).text();
		matricula = $(this).find("td").eq(1).text();
		telefone = $(this).find("td").eq(2).text();
		endereco = $(this).find("td").eq(3).text();
		linha = nome + ";" + matricula + ";" + telefone + ";" + endereco;
		lista.push(linha);
	});
	
	lista.sort();
	
	$("#tabela > tbody > tr").remove();
	var info;
	
	for(var i = 0; i < lista.length; i++){
		info = lista[i].split(";");
		linha = "<tr>" +
				"<td>" + info[0] + "</td>" +
				"<td>" + info[1] + "</td>" +
				"<td>" + info[2] + "</td>" +
				"<td>" + info[3] + "</td>" +
				"<td><input type=\"button\" value=\"Excluir\" onclick=\"excluir("+i+");\" />" +
				"</td>" +
				"</tr>";
		$("#tabela > tbody").append(linha);
	}
	
}
