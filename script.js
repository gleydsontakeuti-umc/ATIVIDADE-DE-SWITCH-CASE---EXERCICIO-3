function selecionarTema() {
  let opcao = document.getElementById("tema").value;
  let resultado = document.getElementById("resultado");

  switch (opcao) {
    case "1":
      resultado.innerHTML = "Você escolheu Corinthians! Explore sobre a historia do time.";
      break;
    case "2":
      resultado.innerHTML = "Você escolheu São Paulo! Explore sobre a historia do time.";
      break;
    case "3":
      resultado.innerHTML = "Você escolheu Palmeiras! Explore sobre a historia do time.";
      break;
    case "4":
      resultado.innerHTML = "Você escolheu Santos! Explore sobre a historia do time.";
      break;
    default:
      resultado.innerHTML = "Opção inválida! Escolha um número válido.";
      resultado.style.color = "red";
  }
}
