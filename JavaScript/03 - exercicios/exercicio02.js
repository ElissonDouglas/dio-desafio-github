/* 
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
à condição de peso de uma pessoa adulta.
Formula do IMC:
IMC = peso / (altura * altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
TMC em adultos Condição:
- Abaixo de 18.5 Abaíxo do peso;
- Entre 18.5 e 25 Peso normal; — ;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
WB */

const peso = 90; // 90kg
const altura = 1.84; // 1.84 metros

const imc = peso / (altura ** 2);

console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if  (imc >= 25 && imc <= 30) {
    console.log("acima do peso");
} else if  (imc >= 30 && imc <= 40) {
    console.log("obesidade");
} else {
    console.log("obesidade grave");
}

