/* 
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
        • SP – R$67.836,43
        • RJ – R$36.678,66
        • MG – R$29.229,88
        • ES – R$27.165,48
        • Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const faturamentoMensal4 = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

type Faturamento = typeof faturamentoMensal4;

function calcularPercentual(faturamento: Faturamento): void {
  const total = faturamento.reduce((acc, item) => acc + item.valor, 0);

  faturamento.forEach((item) => {
    const percentual = (item.valor / total) * 100;
    console.log(`${item.estado}: ${percentual.toFixed(2)}%`);
  });
}

calcularPercentual(faturamentoMensal4);
