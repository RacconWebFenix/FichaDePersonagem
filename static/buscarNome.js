const campoBusca = document.querySelector("#campoNome");
const endereco = document.querySelector("#endereco");

function buscarNome() {
  let campoValor = campoBusca.value;
  console.log(campoValor);
  if(campoValor){
      endereco.setAttribute("href", `/read/buscar/${campoValor}`);
  }
}
