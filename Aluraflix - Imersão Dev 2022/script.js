var leiturasEssenciais = [
  "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41MtioCZaEL._SX359_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51bO3rI8hEL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41Qd+bMbjCL._SY344_BO1,204,203,200_.jpg"
];
document.getElementById("livrosEssenciaisId").innerHTML = " ";
for (var i = 0; i < leiturasEssenciais.length; i++) {
  document.getElementById("livrosEssenciaisId").innerHTML +=
    "<img src=" + leiturasEssenciais[i] + ">";
}

var leiturasProgramacao = [
  "https://images-na.ssl-images-amazon.com/images/I/41mUjO6TGkL._SX331_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/4125lRe2M9L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
  "https://m.media-amazon.com/images/I/41WH7HFsbzL._SY346_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51HGF9mg6iL._SX323_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51wJ1YKfyWL._SX348_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41fhcrnUm7L._SX348_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/5186zoZhD+L._SX360_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41T8NdKFqEL._SX352_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51LUqy2FcnL._SX348_BO1,204,203,200_.jpg"
];
document.getElementById("livrosProgramacaoId").innerHTML = " ";
for (var i = 0; i < leiturasProgramacao.length; i++) {
  document.getElementById("livrosProgramacaoId").innerHTML +=
    "<img src=" + leiturasProgramacao[i] + ">";
}

var leiturasDivertidas = [
  "https://images-na.ssl-images-amazon.com/images/I/41zwWQrTnIL._SX346_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51QcFyPKP1L._SX407_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/612kcfIjK5L._SX398_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/515TICTOduL._SX391_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/511qiuLKrrL._SX356_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/510k-RZjP4L._SX353_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51pWq1CEqWL._SX384_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51BlKLZ32BL._SX346_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61FKCecopbS._SX391_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51ZkJlqUlqL._SX357_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51DXBAbS2aL._SX332_BO1,204,203,200_.jpg"
];

document.getElementById("livrosDivertidosId").innerHTML = " ";
for (var i = 0; i < leiturasDivertidas.length; i++) {
  document.getElementById("livrosDivertidosId").innerHTML +=
    "<img src=" + leiturasDivertidas[i] + ">";
}
