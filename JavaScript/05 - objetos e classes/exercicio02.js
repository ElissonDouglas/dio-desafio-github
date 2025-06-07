/*
2) Crie uma classe para representar pessoas. |

Para cada pessoa teremos os atributos nome, peso e altura.

As pessoas devem ter à capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    };

    classificarIMC(IMC = this.calcularIMC()) {
        if (IMC < 18.5) {
            return 'Abaixo do peso'
        } else if (IMC >= 18.5 && IMC < 25) {
            return 'Peso normal'
        } else if (IMC >= 25 && IMC < 30) {
            return 'Acima do peso'
        } else if (IMC >= 30 && IMC < 40) {
            return 'Obesidade'
        } else {
            return 'Obesidade grave'
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)

console.log(`IMC: ${jose.calcularIMC().toFixed(1)}\n${jose.classificarIMC()}`)


