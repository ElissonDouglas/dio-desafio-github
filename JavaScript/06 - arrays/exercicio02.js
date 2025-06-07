/* 2) Crie um prograna que seja capaz de percorrer uma liste de números e imprima cade número Par encontrado */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é par`)
    };
}