function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if( fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = "" 
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if( sex[0].checked){
            genero = "Homen"
                if(idade >= 0 || idade < 10){
                    
                    img.setAttribute('src', 'homen-criaca.webp')

                } else if(idade < 21){
                    //jovem
                    img.setAttribute('src', 'homen-jovem.webp')

                }else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'homen-adulto.webp')


                } else {
                    //idoso
                    img.setAttribute('src', 'homen-idoso.webp')


                }
        } else if (sex[1].checked){
            genero = "Mulher"
            if(idade >= 0 || idade < 10){
                    
                img.setAttribute('src', 'mulher-criaca.jpeg')

            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpeg')

            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher-adulto.jpeg')


            } else {
                //idoso
                img.setAttribute('src', 'mulher-idoso.jpeg')


            }
        }

        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }
}


