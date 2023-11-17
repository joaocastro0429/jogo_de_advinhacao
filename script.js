

// numero aleatorio  9 ate 99
let secret = parseInt(Math.random() * 100);
//armazena  uma variavel 
let numeroDoJogador;
let tentativas = 0;
const limiteDeTentativas = 5; // Defina o limite desejado

while (numeroDoJogador !== secret && tentativas < limiteDeTentativas) {
    numeroDoJogador = prompt("Qual é o número");
    // sempre incremata mais um ate completar 5 
    tentativas++;

    if (numeroDoJogador == secret) {
        alert("Acertou!");
    } else if (numeroDoJogador < secret) {
        alert("É menor que o número secreto");
    } else if (numeroDoJogador > secret) {
        alert("É maior que o número secreto");
    } else {
        alert("Erro");
    }
}

if (numeroDoJogador == secret) {
    alert("Parabéns! Você acertou em " + tentativas + " tentativas. O número secreto é: " + secret);
} else {
    alert("Suas tentativas acabaram. O número secreto era: " + secret);
}
