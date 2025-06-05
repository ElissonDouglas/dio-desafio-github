/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; "x
*/

const preco = 15.50;
let opcao = 'credito'
let parcelas = 4
if (opcao === 'debito') {
    console.log(`Valor final: R$ ${preco - (preco * 0.10).toFixed(2)}`)
} else if (opcao === 'dinheiro' || opcao === 'pix') {
    console.log(`Valor final: R$ ${(preco - (preco * 0.15)).toFixed(2)}`)
} else if (opcao === 'credito') {
    if (parcelas <= 2) {
        console.log(`Valor final: R$ ${preco.toFixed(2)} em ${parcelas} de R$ ${(preco / 2).toFixed(2)}`) 
    } else {
        let valorFinal = preco + (preco * 0.10)
        let valorParcelas = valorFinal / parcelas
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)} em ${parcelas} de R$ ${valorParcelas.toFixed(2)}`) 
    }
}

