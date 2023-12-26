var idade = 12
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Você Não vota')
} else if(idade < 18 || idade > 65) {
        console.log('Seu Voto opcional')
} else  {
    console.log ('Seu Voto obrigatório')
}
