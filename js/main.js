const botao = document.querySelectorAll(".botao");

let jogador = "X";

let matriz = [];

const vencePosicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [1, 5, 9],
    [3, 6, 9],
];
let cont = 0;

botao.forEach((elemento) => {
    elemento.innerHTML = " ";
    elemento.addEventListener("click", pegaData);
});

function pegaData(evento) {
    const btn = evento.target.getAttribute("data-btn");
    evento.target.innerHTML = jogador;
}
