const campoBusca = document.querySelector("#campoNome");
const endereco = document.querySelector("#endereco");
const tabela = document.querySelector("#testaCampo");

function buscarNome() {
  let campoValor = campoBusca.value;
  let campoLower = campoValor.toLowerCase();
  if (!campoLower) {
    alert("O campo buscar está vazio");
    endereco.setAttribute("href", `/read`);
  } else {
    endereco.setAttribute("href", `/read/buscar/${campoLower}`);
  }
}

campoBusca.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let campoValor = campoBusca.value;
    let campoLower = campoValor.toLowerCase();
    console.log(campoLower);
    buscarNome()
    window.location.href = endereco.getAttribute('href')
  }
});
