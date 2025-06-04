/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:

1 - Preço do etanol;

2 - Preço do gasolina;

3 - O tipo de combustível que está no seu carro;

4 - Gasto médio de combustível do carro por KM;

5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 3.40; // reais
const precoGasolina = 5.79; // reais
const tipoCombustivel = 'gasolina';
const kmPorLitro = 10; // 10 km por litro
const distanciaViagem = 100; // 100km

if (tipoCombustivel === 'etanol') {
    const valorGasto = (distanciaViagem / kmPorLitro) * precoEtanol;

    console.log(`Valor gasto: R$ ${valorGasto.toFixed(2)}`)
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = (distanciaViagem / kmPorLitro) * precoGasolina;

    console.log(`Valor gasto: R$ ${valorGasto.toFixed(2)}`)
}

