const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const clickCookie = document.querySelector("#closedCookie");

const phrases = [
  "O sucesso está sempre a um passo daqueles que persistem.",
  "Grandes coisas estão por vir para aqueles que são pacientes.",
  "A vida é uma jornada, não um destino.",
  "A sorte favorece os corajosos.",
  "Acredite em si mesmo e os outros também acreditarão.",
  "Sua criatividade é um recurso valioso.",
  "Aprenda com seus erros e siga em frente.",
  "A sorte é o que acontece quando a preparação encontra a oportunidade.",
  "A paciência é a chave para muitas portas.",
  "A verdadeira beleza está na simplicidade.",
];

let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

// events

clickCookie.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

// funções 

function generatePhrase() {
  toggleScreen();

  generateRandomPhrase = Math.floor(Math.random() * phrases.length);

  randomPhrase.innerText = phrases[generateRandomPhrase];
}

function buttonTry(event) {
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}
