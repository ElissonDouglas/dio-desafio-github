/* Faça um programa para calcular o valor de uma visgen.

Você terá 3 variaveis. Sendo elas:

1 - Preço do combustivel;

2 - Gasto médio de cosbustivel do carro por KM;

3 - Distancia en KM da viogem;

imprima no console o valor que será gasto de cosbustivel para realizar esta viagem.*/

const combustivel = 5.79; // Preço do combustível por litro
const kmPorLitro = 10; // 10km por cada litro
const distanciaViagem = 100; // 100 KM

let valorGasto = (distanciaViagem / kmPorLitro) * combustivel;

console.log(`valor de gasolina gasto numa viagem de ${distanciaViagem} KM: R$ ${valorGasto.toFixed(2)}`)

