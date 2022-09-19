var nota1 = document.getElementById("inputNota1");
var nota2 = document.getElementById("inputNota2");
var nota3 = document.getElementById("inputNota3");
var nota4 = document.getElementById("inputNota4");
var nomeAluno = document.getElementById("nome");

function calcular() {
  var notaValor1 = nota1.value;
  var notaNumero1 = parseInt(notaValor1);
  
  var notaValor2 = nota2.value;
  var notaNumero2 = parseInt(notaValor2);
  
  var notaValor3 = nota3.value;
  var notaNumero3 = parseInt(notaValor3);
  
  var notaValor4 = nota4.value;
  var notaNumero4 = parseInt(notaValor4);
  
  var notaMedia = (notaNumero1 + notaNumero2 + notaNumero3 + notaNumero4) / 4 ;
  
  var nome = nomeAluno.value;
  
  if (notaMedia == ""){
    var mediaErro = "Favor inserir as notas para calcular a média";
    var mediaTexto = document.getElementById("mediaResultado");
    mediaTexto.innerHTML = mediaErro;
  }else if (notaMedia > 10){
    var mediaMaior = nome + ". Por favor, inserir uma nota de 0 a 10"
    var mediaTexto = document.getElementById("mediaResultado");
    mediaTexto.innerHTML = mediaMaior;
  }else{
    var mediaResultado = nome + " a sua média final é " + notaMedia;
    var mediaTexto = document.getElementById("mediaResultado");
    mediaTexto.innerHTML = mediaResultado;
  }
}