//Variáveis globais
var botao_adicionar = document.querySelector("#adicionar");
var corpo_tabela = document.querySelector("#linhas");

var nome = document.querySelector("input[name=nome]");
var salario = document.querySelector("input[name=salario]");
var dataAdm = document.querySelector("input[name=dataadmissao]");
var hoje = new Date(); //Chama a função data para pegar a data do sistema
var anoAtual = hoje.getFullYear(); //pega só o ano do sistema

//Objetos
function Reajuste(nom, sal, taxa){
	this.nome = nom;
	this.salario = sal;
	this.taxa = taxa;
	this.calcula_reajuste = function (){
		return this.taxa * parseFloat(this.salario) + parseFloat(this.salario);
	}
	/* this.criar_linhas_tabela = function () {
		//Criar elementos
		var linha = document.createElement("tr");
		var campo_nome = document.createElement("td");
		var campo_admissao = document.createElement("td");
		var campo_salario  = document.createElement("td");
		var campo_taxa = document.createElement("td");
		var campo_reajuste = document.createElement("td");
		//Criar nós
		var texto_nome = document.createTextNode(this.nome);
		var texto_admissao = document.createTextNode(dataAdm.value);
		var texto_salario  = document.createTextNode(this.salario);
		var texto_taxa = document.createTextNode(this.taxa);
		var texto_reajuste = document.createTextNode(this.calcula_reajuste());
		//Vincular os nós aos elementos
		campo_nome.appendChild(texto_nome);
		campo_admissao.appendChild(texto_admissao);
		campo_salario.appendChild(texto_salario);
		campo_taxa.appendChild(texto_taxa);
		campo_reajuste.appendChild(texto_reajuste);
		linha.appendChild(texto_nome);
		linha.appendChild(texto_admissao);
		linha.appendChild(texto_salario);
		linha.appendChild(texto_taxa);
		linha.appendChild(texto_reajuste);
		//Vincular os elementos ao documento
		corpo_tabela.appendChild(linha);
	} */
	this.criar_linhas_template = function () {
		var template = document.querySelector("#tabLinhas");
		lista_td = template.content.querySelectorAll("td");
		lista_td[0].textContent = this.nome;
		lista_td[1].textContent = dataAdm.value;
		lista_td[2].textContent = this.salario;
		lista_td[3].textContent = parseFloat(this.taxa * 100)+"%";
		lista_td[4].textContent = this.calcula_reajuste();
		var nova_linha = document.importNode(template.content, true);
		corpo_tabela.appendChild(nova_linha);
	}
};

//Funções
function adicionar_dados(event){
	event.preventDefault();
	var admissao = new Date(dataAdm.value); //Chama a função da Date() para manipular com o getFullYear
	var anoAdmissao = admissao.getFullYear(); //pega só o ano da data digitada
	var anos = anoAtual - anoAdmissao;
	if(anos<5){
		var taxa = 0.05;
	}else{
		if (anos<10){
			var taxa = 0.1;
		}else{
			if (anos<15){
				var taxa = 0.15;
			}else{
				var taxa = 0.2;
			}
		}
	}
	novo_reajuste = new Reajuste(nome.value, salario.value, taxa);
	novo_reajuste.criar_linhas_template();
};

//Rotina Principal
botao_adicionar.addEventListener('click', adicionar_dados);