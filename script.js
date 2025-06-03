
let selecionados = [];
let total = 0;

document.getElementById("barca").addEventListener("change", atualizarRestante);
document.getElementById("quantidade").addEventListener("input", atualizarRestante);
document.getElementById("adicionar").addEventListener("click", () => {
  const item = document.getElementById("item").value;
  const qtd = parseInt(document.getElementById("quantidade").value);
  const obs = document.getElementById("obs").value;

  if (!item || !qtd || qtd <= 0) return;

  selecionados.push({ item, qtd, obs });
  total += qtd;
  atualizarLista();
  atualizarRestante();
  document.getElementById("item").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("obs").value = "";
});

document.getElementById("confirmar").addEventListener("click", () => {
  const mesa = document.getElementById("mesa").value;
  if (!mesa || selecionados.length === 0) return;

  const barcaQtd = parseInt(document.getElementById("barca").value);
  if (total > barcaQtd) {
    alert("Quantidade excedida!");
    return;
  }

  document.getElementById("mensagem").innerHTML = "✅ Pedido da mesa " + mesa + " confirmado com " + total + " peça(s).";
  selecionados = [];
  total = 0;
  atualizarLista();
  atualizarRestante();
});

function atualizarLista() {
  const ul = document.getElementById("selecionados");
  ul.innerHTML = "";
  selecionados.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = `${el.item} - ${el.qtd} (${el.obs})`;
    ul.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function atualizarRestante() {
  const barcaQtd = parseInt(document.getElementById("barca").value);
  const restante = barcaQtd - total;
  document.getElementById("restante").textContent = restante >= 0 ? restante : 0;
}
