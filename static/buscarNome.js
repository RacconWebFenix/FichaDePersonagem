const campoBusca = document.querySelector("#campoNome");
const endereco = document.querySelector("#endereco");
const tabela = document.querySelector("#testaCampo");

function buscarNome() {
  let campoValor = campoBusca.value;

  if (!campoValor) {
    alert("O campo buscar está vazio");
    endereco.setAttribute("href", `/read`);
  } else {
    endereco.setAttribute("href", `/read/buscar/${campoValor}`);
  }
}
