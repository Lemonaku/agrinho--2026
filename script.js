const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("open");
});

function mostrarImpacto(texto) {
document.getElementById("impactoTexto").textContent = texto;
}

const botoesImpacto = document.querySelectorAll(".impact-board button");

botoesImpacto[0].addEventListener("click", () => {
mostrarImpacto("Desmatamento reduz biodiversidade e altera o equilíbrio climático.");
});

botoesImpacto[1].addEventListener("click", () => {
mostrarImpacto("Uso excessivo da água pressiona rios, nascentes e aquíferos.");
});

botoesImpacto[2].addEventListener("click", () => {
mostrarImpacto("Emissões de carbono intensificam o aquecimento global.");
});

const botaoCalcular = document.getElementById("botaoCalcular");

botaoCalcular.addEventListener("click", calcular);

function calcular() {
const agua = Number(document.getElementById("agua").value);
const resultado = document.getElementById("resultado");
const fill = document.getElementById("meterFill");

if (!agua || agua <= 0) {
resultado.textContent = "Digite um valor válido.";
fill.style.width = "0";
return;
}

const economia = agua * 0.3;
resultado.textContent = `Economia estimada: ${economia.toFixed(0)} litros/mês.`;
fill.style.width = "70%";
}

const quiz = [
{
q: "Qual tecnologia ajuda a mapear lavouras?",
a: ["Drones", "Queimada", "Desmatamento"],
c: 0
},
{
q: "Qual prática protege o solo?",
a: ["Rotação de culturas", "Erosão", "Monocultura sem manejo"],
c: 0
},
{
q: "Qual fonte é renovável?",
a: ["Diesel", "Carvão", "Solar"],
c: 2
}
];

let etapa = 0;
let score = 0;

function carregarPergunta() {
const item = quiz[etapa];
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");

pergunta.textContent = item.q;
respostas.innerHTML = "";

item.a.forEach((texto, i) => {
const btn = document.createElement("button");
btn.textContent = texto;

btn.addEventListener("click", () => responder(i));

respostas.appendChild(btn);
});
}

function responder(i) {
if (i === quiz[etapa].c) {
score++;
}

etapa++;

if (etapa < quiz.length) {
carregarPergunta();
} else {
document.getElementById("pergunta").textContent = "Quiz finalizado.";
document.getElementById("respostas").innerHTML = "";
document.getElementById("pontuacao").textContent = `Pontuação: ${score}/${quiz.length}`;
}
}

carregarPergunta();
