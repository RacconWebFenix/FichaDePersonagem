const campoBusca = document.querySelector("#campoNome");
const endereco = document.querySelector("#endereco");

function buscarNome() {
  let campoValor = campoBusca.value;
  console.log(campoValor);
  if (!campoValor) {
    alert("O campo buscar está vazio");
    endereco.setAttribute("href", `/read`);
  } else {
    endereco.setAttribute("href", `/read/buscar/${campoValor}`);
  }
}
