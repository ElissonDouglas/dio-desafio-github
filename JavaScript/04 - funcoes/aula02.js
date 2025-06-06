function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros))
}



function escrevaMeuNome(nome) {
    console.log(`meu nome é ${nome}`)
}

function isAdult(idade) {
    if (idade < 18) {
        console.log("menor de idade")
    } else {
        console.log('maior de idade')
    }
}


escrevaMeuNome('Elisson')
isAdult(13)

let preco = 15.50
let opcao = 'debito'
let parcelas = 2

if (opcao === 'debito') {
    let desconto = 0.10 // 10%
    console.log(`total a pagar: R$ ${aplicarDesconto(preco, desconto)}`)
} else if (opcao === 'dinheiro' || opcao === 'pix') {
    let desconto = 0.15 // 15%
    console.log(`total a pagar: R$ ${aplicarDesconto(preco, desconto)}`)
} else if (opcao === 'credito') {
    if (parcelas <= 2) {
        console.log(`total a pagar R$ ${preco.toFixed(2)} em ${parcelas} parcela(s) de R$ ${preco / parcelas}`)
    } else {
        let juros = 0.10  // 10 %
        let totalPagar = aplicarJuros(preco, juros)
        console.log(`total a pagar R$ ${totalPagar.toFixed(2)} em ${parcelas} parcelas de R$ ${(totalPagar / parcelas).toFixed(2)}`)
    }

}




