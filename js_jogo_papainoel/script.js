var tela;
var noel = new Image();
var contPula = 1;
var contAnda = 1;
var contMorre = 1;
var noelX = 20;
var noelY = 350;
var fimSalto = false;
var salto, direcao;
var bX = 0;
var bY = -270;
var arrZombie = new Array();
var contPasso = 1;
var died = false;


var background = new Image();
//background.src = "./images/background.svg";
background.src = "./images/background.jpg";

$(document).keyup((e) => {
    if (e.code == "ArrowRight" || e.code == "ArrowLeft") direcao = "p";
});

$(document).keydown((e) => {
    //console.log(e);
    switch (e.code) {
        case "Space":
            salto = true;
            break;
        case "ArrowRight":
            direcao = "f";
            break;
        case "ArrowLeft":
            direcao = "t";
            break;
        default:
            direcao = "p";
            break;
    }
});

$(document).ready(() => {

    tela = document.getElementById("tela").getContext("2d");

    if(!died) {
        console.log(13)
    }
    setInterval(() => {
        if(!died) {
            desenha()
        }
    }, 50);
    
});

function desenha() {
    if (arrZombie < 7) {
        var x = 0
        while ( (x = Math.floor((Math.random() * 1000))) < 400) {
        }
        x = (540 + 140) + 300
        console.log(x);
        arrZombie.push(new zombie(x));
    }

    switch (direcao) {
        case "f":
            anda(10);
            contAnda++;
            if (contAnda > 13) contAnda = 1;
            break;
        case "t":
            andaTras(10);
            contAnda++;
            if (contAnda > 13) contAnda = 1;
            break;
        case "p":
        default:
            anda(0);
            contAnda = 1;
            break;
    }

}

/*function desenhaFundo() {
    
    var degrade = tela.createLinearGradient(0, 250, 0, 470);
    degrade.addColorStop(".3", "#3F9EEB");
    degrade.addColorStop("1", "#8FCDFF");

    tela.fillStyle = degrade;
    tela.fillRect(0, 0, 500, 470);

    tela.fillStyle = "#269422";
    tela.fillRect(0, 470, 500, 30);

}*/

function anda(vel) {
    tela.fillStyle = "#FFF";
    noel.src = "./images/Walk(" + contAnda + ").png";
    if (vel == 0) {
        noel.src = "./images/Idle (1).png";
    }
    noel.onload = function () {
        noelX += vel;
        if (noelX >= 180) {
            noelX = 180;
            bX -= vel;
            //if(bX <= -700) bX = -10;
            //console.log(bX);
        }
        //tela.fillRect(noelX, noelY, 220, 210);
        //desenhaFundo();

        if (salto == true) noelPula(vel);
        for (let i = 0; i < arrZombie.length; i++) {
            arrZombie[i].anda(vel);
        }
        tela.drawImage(background, bX, bY);
        tela.drawImage(noel, noelX, noelY);
    }
}

function andaTras(vel) {
    tela.fillStyle = "#FFF";
    noel.src = "./images/Back(" + contAnda + ").png";
    if (vel == 0) {
        noel.src = "./images/Idle (1).png";
    }
    noel.onload = function () {
        noelX -= vel;
        if (noelX >= 180) {
            noelX = 180;
            bX -= vel;
            //if(bX <= -700) bX = -10;
            //console.log(bX);
        }
        //tela.fillRect(noelX, noelY, 220, 210);
        //desenhaFundo();

        if (salto == true) noelPula(vel);
        for (let i = 0; i < arrZombie.length; i++) {
            arrZombie[i].anda(vel);
        }
        tela.drawImage(background, bX, bY);
        tela.drawImage(noel, noelX, noelY);
        
    }
}

function noelPula(vel) {
    tela.fillStyle = "#FFF";
    noel.src = "./images/Jump(" + contPula + ").png";
    noel.onload = function () {
        //tela.fillRect(noelX, noelY-50, 220, 210);
        tela.drawImage(background, bX, bY);
        tela.drawImage(noel, noelX, noelY);
    }
    noelX -= vel;
    if ((noelY >= 200) && (!fimSalto)) {
        noelY -= 20;
        if (noelY == 190) {
            fimSalto = true;
        }
    } else if ((noelY <= 350) && (fimSalto)) {
        noelY += 20;
        if (noelY == 350) {
            fimSalto = false;
            salto = false;
        }
    }
    contPula++;
    if (contPula > 16) {
        contPula = 1;
    }
}

class zombie {
    constructor(x) {
        this.x = x;
        this.y = 355;
    }
    anda(vel) {
        this.x -= (vel/2) + 2;
        var tX = this.x;
        var tY = this.y;
        var img = new Image();
        img.src = "./images/zombie/Attack(" + contPasso + ").png";
        img.onload = function () {
            tela.drawImage(img, tX, tY);
        }
        console.log(noelY+'--'+this.y)
        if((this.x >= (noelX))&&(this.x <= (noelX+110))){
            if((this.y - 5 == noelY+100)&&((this.x >= (noelX))&&(this.x <= (noelX+110)))){
                console.log(this.x + '  SUCESSO ZOMBIE MORTO')
        
                arrZombie.pop(0)
                score()
                contMorre = 1

            }else {
                console.log(this.x + '  SUCESSO PAPAI NOEL MORTO')
                
                noelDied()
                contMorre++;
                if (contMorre > 13) {
                    contMorre = 1
                    died = true
                }
            }
            
            //arrZombie.pop(0)
        }

        /*if((this.y - 5 == noelY+100)&&((this.x >= (noelX))&&(this.x <= (noelX+110)))){
        console.log(this.x + '  SUCESSO ZOMBIE MORTO')

            arrZombie.pop(0)
            score()
        }*/

        contPasso++;
        if (contPasso > 8) contPasso = 1;

    }
}

var pont = 0
function score() {
    pont++

    var score = $('#score')
    score.html(pont+' Score')
}

function noelDied() {
    
    tela.fillStyle = "#FFF";
    noel.src = "./images/Dead(" + contMorre + ").png";

    noel.onload = function () {
       
        //tela.fillRect(noelX, noelY, 220, 210);
        //desenhaFundo();

        tela.drawImage(background, bX, bY);
        tela.drawImage(noel, noelX, noelY);
        
    }
}