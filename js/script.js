/*Arquivo Java SCript para o menu de navegação do site*/

// 1. Ano atual no rodapé
document.getElementById("anoAtual").textContent = new Date().getFullYear();

//Voltar ao topo da página
const voltarAoTopo = document.getElementById("meuBotao");

voltarAoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Rolagem suave
  });
});