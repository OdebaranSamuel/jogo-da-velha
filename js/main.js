const botao = document.querySelectorAll(".botao");
const jogador = document.querySelector(".jogador");

const matriz = [];
let cont = 0;

botao.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        return console.log(elemento.innerHTML);
    });
});

// function adicionaMatriz() {}
// for (let linha = 0; linha < 3; linha++) {
//     for (let coluna = 0; coluna < 3; coluna++) {
//         console.log(matriz[linha][coluna]);
//     }
// }
