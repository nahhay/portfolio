const abrir = document.querySelector(".abrir-info");
const fechar = document.querySelector(".fechar-info");
const janela = document.querySelector("#extras");

function mostrar(valor) {
  janela.hidden = !valor;
  abrir.setAttribute("aria-expanded", valor);
}

abrir.addEventListener("click", () => mostrar(true));
fechar.addEventListener("click", () => mostrar(false));
janela.addEventListener("click", (e) => {
  if (e.target === janela) mostrar(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") mostrar(false);
});
