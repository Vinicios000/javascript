function contar() {
    let iini = document.getElementById('iini')
    let ifi = document.getElementById('ifi')
    let ipas = document.getElementById('ipas')
    let res = document.getElementById('res')

    if ( iini.Value.length == 0 || ifi.Value.length == 0 || ipas.Value.length == 0 ) {
        alert('[ERRO]')
        // res.innerHTML = 'Impossível contar'
        
    } else{
        alert('TUDO OK')
        // res.innerHTML = 'Contando: <br>'
        // let i = Number(iini.Value)
        // let f = Number(ifi.value)
        // let p = Number(ipas.value)

        // if(p <= 0){
        //     alert('Passe inválido! Considere PASSO 1.')
        //     p = 1

        // }if (i < f){
        //     for(let c = i; c <= f; c += p){
        //             res.innerHTML += `${c} \u{1F449}`
        //     }

        // }else{
        //     for(let c = i; c >= f; c -= p){
        //         res.innerHTML += `${c} \u{1F449}`
        //     }
        // }
        // res.innerHTML += `\(1F3C1)`
    }
}
