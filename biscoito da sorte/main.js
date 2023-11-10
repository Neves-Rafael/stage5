//Variáveis
const cookie = document.getElementById("cookie");
const home = document.getElementById("home");
const result = document.getElementById("result");
const button = document.querySelector("button");
const textResult = result.querySelector("p");
const main = document.querySelector("main");
const audioCookie = document.getElementById("cookiebroke");

//Messenger
const messenger = [
  "Acredite no poder dos seus sonhos, pois eles são a chave para um futuro brilhante!",
  "A paciência é a chave para abrir portas que hoje parecem impossíveis.",
  "Seja gentil consigo mesmo. Às vezes, é preciso pausar para recarregar as energias.",
  "A sorte favorece os corajosos. Arrisque-se e veja o que o destino reserva para você!",
  "A felicidade está nas pequenas coisas. Aproveite os momentos simples da vida.",
  "O sucesso é uma jornada, não um destino. Continue avançando, um passo de cada vez.",
  "A gratidão transforma o que temos em suficiente. Agradeça pelas bênçãos diárias.",
  "Lembre-se: cada desafio é uma oportunidade disfarçada. Enfrente-os com determinação!",
  "Sua criatividade é a chave para desbloquear novas possibilidades. Liberte sua mente!",
  "A vida é como um biscoito da sorte: surpresas esperam por aqueles que estão dispostos a saboreá-las. Aproveite o momento!",
];

//Events
cookie.addEventListener("click", openCookie);
button.addEventListener("click", reloadCookie);

//funções
function openCookie() {
  main.classList.add("transition");
  audioCookie.play();
  home.classList.toggle("hide");
  result.classList.toggle("hide");
  let randomNumber = Math.floor(Math.random() * 10);
  getMessenger(randomNumber);
}

function reloadCookie() {
  home.classList.toggle("hide");
  result.classList.toggle("hide");
  main.classList.remove("transition");
}

function getMessenger(randomNumber) {
  textResult.innerHTML = messenger[randomNumber];
}
