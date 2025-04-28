let time = 2000;
let primeiraImagem = 0;
let imagens = document.querySelectorAll("#section-img img");
max = imagens.length;

function trocarImagem() {
  imagens[primeiraImagem].classList.remove("primeira");
  primeiraImagem++;

  if (primeiraImagem >= max) {
    primeiraImagem = 0;
  }
  imagens[primeiraImagem].classList.add("primeira");
}

function start() {
  setInterval(() => {
    trocarImagem();
  }, time);
}

window.addEventListener("load", start());
