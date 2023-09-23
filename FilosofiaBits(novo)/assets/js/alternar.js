const body = document.querySelector("body");
function alternarEscuro() {
  if (body.classList.contains("escuro")) {
    body.classList.remove("escuro");
    localStorage.setItem("tema", "luz");
  } else {
    body.classList.add("escuro");
    localStorage.setItem("tema", "escuro");
  }
}
if (localStorage.getItem("tema") === "escuro") {
  body.classList.add("escuro");
}