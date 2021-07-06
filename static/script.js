const selectClass = document.querySelector("#pjclass");
const mudarImagem = document.querySelector("#imagem");
const rangeForca = document.querySelector("#rangeForca");
const rangeDestreza = document.querySelector("#rangeDestreza");
const rangeConstituicao = document.querySelector("#rangeConstituicao");
const rangeSabedoria = document.querySelector("#rangeSabedoria");
const rangeInteligencia = document.querySelector("#rangeInteligencia");
const mudarValorForca = document.querySelector("#mudarValorForca");
const mudarValorDestreza = document.querySelector("#mudarValorDestreza");
const mudarValorConstituicao = document.querySelector(
  "#mudarValorConstituicao"
);
const mudarValorSabedoria = document.querySelector("#mudarValorSabedoria");
const mudarValorInteligencia = document.querySelector(
  "#mudarValorInteligencia"
);
const imagemCampo = document.querySelector("#imagemCampo");
const classeEscolha = document.querySelector("#classeEscolha");
const pontosParaDistribuir = document.querySelector("#pontos");




selectClass.addEventListener("change", function () {
  let valor = selectClass.options[selectClass.selectedIndex].value;
  let valorText = selectClass.options[selectClass.selectedIndex].text;
  mudarImagem.setAttribute("src", `../static/img/${valor}.jpg`);

  // não deixar dar submit se valor == 0
  if (valor == 0) {
    console.log("Escolha uma classe 1");
  } else {
    console.log(valorText);
    classeEscolha.value = valorText;
    console.log(mudarImagem.getAttribute("src"));
    imagemCampo.value = mudarImagem.getAttribute("src");
  }
});


rangeForca.addEventListener("input", function () {
  mudarValorForca.textContent = this.value;
   
});

rangeDestreza.addEventListener("input", function () {
  mudarValorDestreza.textContent = this.value;
});

rangeConstituicao.addEventListener("input", function () {
  mudarValorConstituicao.textContent = this.value;
});

rangeSabedoria.addEventListener("input", function () {
  mudarValorSabedoria.textContent = this.value;
});

rangeInteligencia.addEventListener("input", function () {
  mudarValorInteligencia.textContent = this.value;
});


// function teste() {
//   let pontos = pontosParaDistribuir.textContent;
//   let pontosInts = parseInt(pontos)
//   let pt = pontosInts - 1
//   console.log(--pt)
// }

// // function calcular() {
  


//   var valor1 = 80;
//   var valor2 = rangeForca.value;
//   var valor3 = rangeDestreza.value;
//   var result = valor2 + valor3
//   var resul = valor1 - result;
//   if(resul <= 0){
//     rangeForca.setAttribute("max", valor1);
//     rangeDestreza.setAttribute("max", valor1);
//     mudarValorForca.textContent = valor1;
//     mudarValorDestreza.textContent = valor1;
//   }else{
//     rangeForca.setAttribute("max", 50);
//     rangeDestreza.setAttribute("max", 50);
//   }
//   pontosParaDistribuir.textContent = valor1;
// }