/* 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima à
sua média e à sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

- Média menor que 5, reprovação;

- Média entre 5 e 7, recuperação;

- Média acima de 7, passou de semestre; */

const nota1 = 3;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log("reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("recuperacao");
} else {
    console.log("aprovado");
};


