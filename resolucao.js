// 1) Resposta = 1-91

// 2)
const input = 21;

function isFibonacci(number) {
  if (number < 0) return false;

  let a = 0;
  let b = 1;

  while (a <= number) {
    if (a === number) return true;
    [a, b] = [b, a + b];
  }

  return false;
}
if (isFibonacci(input)) {
    console.log("O número ${input} pertence à sequência");
  } else {
    console.log("O número ${input} não pertence à sequência");
  }

// 3)

const faturamentoMensal = [
    { dia: 1, valor: 100.0 },
    { dia: 2, valor: 200.0 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 150.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 300.0 },
    { dia: 7, valor: 400.0 },
    { dia: 8, valor: 0.0 },
    { dia: 9, valor: 250.0 },
    { dia: 10, valor: 0.0 },
  ];
  
  const diasComFaturamento = faturamentoMensal.filter((d) => d.valor > 0);
  
  const menorFaturamento = Math.min(...diasComFaturamento.map((d) => d.valor));
  
  const maiorFaturamento = Math.max(...diasComFaturamento.map((d) => d.valor));
  
  const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;
  
  const diasAcimaDaMedia = diasComFaturamento.filter((d) => d.valor > mediaMensal).length;
  
  console.log("Menor valor de faturamento:", menorFaturamento);
  console.log("Maior valor de faturamento:", maiorFaturamento);
  console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);

//4
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
  console.log("Percentual de representação por estado:");
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(`${estado} ${percentual.toFixed(2)}%`);
  }

// 5)
function reverseString(value) {
    const str = String(value);
     return str.split("").reverse().join("")
 }
console.log(reverseString("nome"))