/*
  Para fazer os testes, utilizei o link a seguir: https://www.typescriptlang.org/
*/

let INDICE = 13,
  SOMA = 0,
  K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

// --------------------------------

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

// ----------------------------------

import * as fs from "fs";

interface FaturamentoData {
  faturamento_diario: number[];
}

interface Resultados {
  menor_faturamento: number;
  maior_faturamento: number;
  dias_acima_media: number;
}

function calcularFaturamento(faturamentoDiario: number[]): Resultados {
  const diasValidos = faturamentoDiario.filter(
    (faturamento) => faturamento > 0
  );

  if (diasValidos.length === 0) {
    return { menor_faturamento: 0, maior_faturamento: 0, dias_acima_media: 0 };
  }

  const mediaFaturamento =
    diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;

  return {
    menor_faturamento: Math.min(...diasValidos),
    maior_faturamento: Math.max(...diasValidos),
    dias_acima_media: diasValidos.filter(
      (faturamento) => faturamento > mediaFaturamento
    ).length,
  };
}

fs.readFile("faturamento.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const faturamentoData: FaturamentoData = JSON.parse(data);
  const resultados = calcularFaturamento(faturamentoData.faturamento_diario);

  console.log(resultados);
});

// ----------------------------

interface Faturamento {
  [estado: string]: number;
}

const faturamentoMensal: Faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentualRepresentacao(faturamento: Faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  console.log(`Faturamento Total: R$ ${totalFaturamento.toFixed(2)}`);

  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

calcularPercentualRepresentacao(faturamentoMensal);

// -----------------------------

function inverterString(str: string): string {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

const stringOriginal = "Exemplo de string";
const stringInvertida = inverterString(stringOriginal);

console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${stringInvertida}`);
