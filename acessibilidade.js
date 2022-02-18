var tamanhoFonte = 12;
var corDaFonte = "#000000";

function diminuirFonte() {
    tamanhoFonte = tamanhoFonte - 2;
    document.body.style.fontSize = tamanhoFonte + "pt";
}

function aumentarFonte() {
    tamanhoFonte = tamanhoFonte + 2;
    document.body.style.fontSize = tamanhoFonte + "pt";
}

function normalizarFonte() {
    tamanhoFonte = 12;
    document.body.style.fontSize = tamanhoFonte + "pt";
}

function trocar() {
var obj=document.getElementById('corpo');

if(obj.className=='fundo'){
    obj.className='fundo1';
}else{
    obj.className='fundo';
    }
}

function trocar1() {
var obj=document.getElementById('menu');

if(obj.className=='menu'){
    obj.className='menu1';
}else{
    obj.className='menu';
    }
}