// Funções

function openMenu() {
  var menuContainer = document.querySelector(".container-menu-js");
  menuContainer.classList.add("aberto"); // Adiciona a classe 'aberto' ao contêiner do menu
}

function closeMenu() {
  var menuContainer = document.querySelector(".container-menu-js");
  menuContainer.classList.remove("aberto"); // Remove a classe 'aberto' do contêiner do menu
}

// Documento pronto

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-botao-js");
  var menuClose = document.querySelector(".menu-fechar-js");

  menuButton.addEventListener("click", function () {
    openMenu(); // Executa a função openMenu ao clicar no botão do menu
  });

  menuClose.addEventListener("click", function () {
    closeMenu(); // Executa a função closeMenu ao clicar no botão de fechar o menu
  });
});

// Acessibilidade do teclado

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    // Tecla 'Esc'
    var menuContainer = document.querySelector(".container-menu-js");

    if (menuContainer.classList.contains("aberto")) {
      closeMenu(); // Fecha o menu se estiver aberto ao pressionar a tecla 'Esc'
    }
  }
});