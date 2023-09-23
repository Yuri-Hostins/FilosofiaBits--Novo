window.addEventListener("scroll", function () {
  const header = document.querySelector("header"); // Seleciona o elemento header
  header.classList.toggle("navegacao-fixa", window.scrollY > 0); // Alterna a classe "navegacao-fixa" no header com base no deslocamento vertical da janela de visualização (scrollY)
  
  
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header"); // Seleciona o elemento header
  if (window.scrollY > 0) {
    header.classList.add("sem-margens"); // Adicione a classe "sem-margens" quando o scroll for maior que 0
  } else {
    header.classList.remove("sem-margens"); // Remova a classe "sem-margens" quando o scroll for igual a 0
  }
});
