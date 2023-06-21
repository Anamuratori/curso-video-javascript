function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()

    
    
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        res.innerHTML = 'Ano inválido.'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'imagem')
        
        
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'https://st3.depositphotos.com/7375876/14699/i/450/depositphotos_146994617-stock-photo-the-baby-makes-selfie-fanny.jpg')
            } else if (idade < 22) {
                img.setAttribute('src', 'https://media.istockphoto.com/id/1387529022/photo/portrait-of-a-happy-teenager-boy-at-home.webp?b=1&s=170667a&w=0&k=20&c=ZDqYe4cte-c3rtl05G1NvcKdI9usg3EoSo7MISyJoWI=')
            } else if (idade < 50) {

            } else {

            }

        } else if (fsex[1].checked){
            genero = 'mulher'
        }

        if (idade < 2) {
            res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }
        res.appendChild(img)
        
    }

}