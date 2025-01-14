/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre
    será a somados 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule
    a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
    pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function pertenceFibonacci(n: number): boolean {
  let a = 0,
    b = 1;
  while (a < n) {
    [a, b] = [b, a + b];
  }
  return a === n;
}

const numero = parseInt(prompt("Digite um número: ") || "0");

if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
