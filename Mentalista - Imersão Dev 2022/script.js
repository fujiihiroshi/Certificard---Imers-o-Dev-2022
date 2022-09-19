var numeroSecreto = parseInt(Math.random() * 101);
var numeroSecretoMenor = numeroSecreto - 1;
var numeroSecretoMaior = numeroSecreto + 1;

var numeroTentativas = 7;
var numeroChances = document.getElementById("chances");
var emojiTentativas = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];
numeroChances.innerHTML = emojiTentativas.join(" ");

var chutesText = document.getElementById("numerosChutes");
var chutesTentados = [""];
chutesText.innerHTML = chutesTentados.join(" ");
// para os chutes, fazer outra função que pega os números do input e se ele não for menor ou maior doq os números permitidos, adiciona-los ao array;

function remover() {
  emojiTentativas.pop();
  numeroChances.innerHTML = emojiTentativas.join(" ");
}

function adicionar() {
  var chutesValor = document.getElementById("valor").value;
  chutesTentados.push(chutesValor);
  chutesText.textContent = chutesTentados.join(" ");
}

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultadoTexto = document.getElementById("resultado");

  if (numeroTentativas >= 1) {
    if (chute > 100 || chute < 0) {
      var chuteAcima =
        "Poxa cara, suas habilidades telepáticas estão vendo muito longe";
      resultadoTexto.innerHTML = chuteAcima;
    } else if (chute == numeroSecreto) {
      var chuteAcerto = "PARABÉNS, TELEPATA";
      resultadoTexto.innerHTML = chuteAcerto;
    } else if (chute == numeroSecretoMenor) {
      var chuteQuaseMenor = "Quasee, mas o número ainda é maior";
      resultadoTexto.innerHTML = chuteQuaseMenor;
      numeroTentativas--;
      remover();
      adicionar();
    } else if (chute < numeroSecretoMenor) {
      var chuteMenor = "Está enganado, o número é maior";
      resultadoTexto.innerHTML = chuteMenor;
      numeroTentativas--;
      remover();
      adicionar();
    } else if (chute == numeroSecretoMaior) {
      var chuteQuaseMaior = "Quasee, mas o número ainda é menor";
      resultadoTexto.innerHTML = chuteQuaseMaior;
      numeroTentativas--;
      remover();
      adicionar();
    } else if (chute > numeroSecretoMaior) {
      var chuteMaior = "Está enganado, o número é menor";
      resultadoTexto.innerHTML = chuteMaior;
      numeroTentativas--;
      remover();
      adicionar();
    }
  } else {
    document.getElementById("chutar").disabled = true;
    var fimTentativas = "Poxa, não foi dessa vez, reinicie o jogo";
    resultadoTexto.innerHTML = fimTentativas;
  }
}
