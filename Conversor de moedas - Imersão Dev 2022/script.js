var real = document.getElementById("valorReal");
var dolar = document.getElementById("valorDolar");
var bitcoin = document.getElementById("valorBitcoin");
real.addEventListener("input", converterReal);
dolar.addEventListener("input", converterDolar);
bitcoin.addEventListener("input", converterBit);

function converterReal() {
  var d = Number(real.value) * 0.19;
  dolar.value = d.toFixed(2);
  var b = Number(real.value) * 0.000009;
  bitcoin.value = b.toFixed(2);

  if (real.value == "") {
    dolar.value = "";
    bitcoin.value = "";
  }
}

function converterDolar() {
  var r = Number(dolar.value) * 5.15;
  real.value = r.toFixed(2);
  var b = Number(dolar.value) * 0.000046;
  bitcoin.value = b.toFixed(2);

  if (dolar.value == "") {
    real.value = "";
    bitcoin.value = "";
  }
}

function converterBit() {
  var r = Number(bitcoin.value) * 111299.66;
  real.value = r.toFixed(2);
  var d = Number(bitcoin.value) * 21652.6;
  dolar.value = d.toFixed(2);

  if (bitcoin.value == "") {
    dolar.value = "";
    real.value = "";
  }
}
