/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    };

    calcularGasto (distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    };
}


const meuCarro = new Carro('BYD', 'preto', 1)

console.log(`Gasto: R$ ${meuCarro.calcularGasto(100, 5.79).toFixed(2)}`)