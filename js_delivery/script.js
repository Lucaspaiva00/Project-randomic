var btAdd = document.querySelector("#btAdd");
btAdd.addEventListener("click", add);
var contLinha = 0;
function add(){
    var nomeCli = document.querySelector("#nome");
    var enderecoCli = document.querySelector("#endereco");
    var lanche = document.querySelector("#lanche");
    var quantidade = document.querySelector("#qtd");

    var container1 = document.querySelector(".pedidos");

    var divCardMt1 = document.createElement("div");
    divCardMt1.className = "card mt-2";
    divCardMt1.id = "div-"+contLinha;
    contLinha++;

    var divCardBody = document.createElement("div");
    divCardBody.className = "card-body d-flex w-100 text-left";

    var divDFlex = document.createElement("div");
    divDFlex.className = "d-flex flex-column";

    var h4Nome = document.createElement("h4");
    h4Nome.innerText = nomeCli.value;

    var h5Endereco = document.createElement("h5");
    h5Endereco.innerText = enderecoCli.value;

    var h4Lanches = document.createElement("h4");
    h4Lanches.className = "ml-auto";
    h4Lanches.innerText = quantidade.value+" "+lanche.value+"\r\n";
    h4Lanches.addEventListener("click", () => {        
        h4Lanches.innerText += quantidade.value+" "+lanche.value+"\r\n";
    });

    var imgMl = document.createElement("img");
    imgMl.className = "ml-auto";
    imgMl.src = "img/delivery.png";
    imgMl.width = 60;
    imgMl.height = 60;
    

    divDFlex.appendChild(h4Nome);
    divDFlex.appendChild(h5Endereco);

    divCardBody.appendChild(divDFlex);
    divCardBody.appendChild(h4Lanches);
    divCardBody.appendChild(imgMl);
    divCardMt1.appendChild(divCardBody);

    container1.appendChild(divCardMt1);

    var nome = nomeCli.value;
    var endereco = enderecoCli.value;

    imgMl.addEventListener("click", (e) =>{
        var textoLanche = h4Lanches.innerText;
        console.log(divCardMt1);
        container1.removeChild(divCardMt1);

        var container = document.querySelector(".entregas");
            
        var divCardMt = document.createElement("div");
        divCardMt.className = "card mt-2";
    
        var divCardBody = document.createElement("div");
        divCardBody.className = "card-body d-flex w-100 text-left";
    
        var divDFlex = document.createElement("div");
        divDFlex.className = "d-flex flex-column";
    
        var h4Nome = document.createElement("h4");
        h4Nome.innerText = nome;
    
        var h5Endereco = document.createElement("h5");
        h5Endereco.innerText = endereco;
    
        divDFlex.appendChild(h4Nome);
        divDFlex.appendChild(h5Endereco);
    
        var h4Lanche = document.createElement("h4");
        h4Lanche.innerText = textoLanche;
        h4Lanche.className = "ml-auto";

    
        var imgMl = document.createElement("img");
        imgMl.className = "ml-auto";
        imgMl.src = "img/check.png";
        imgMl.width = 60;
        imgMl.height = 60;

        imgMl.addEventListener("click", () => {
            container.removeChild(divCardMt)
        });
    
        divCardBody.appendChild(divDFlex);
        divCardBody.appendChild(h4Lanche);
        divCardBody.appendChild(imgMl);
    
        divCardMt.appendChild (divCardBody);
    
        container.appendChild(divCardMt);
        });
        nomeCli.value = "";
        enderecoCli.value = "";        
}