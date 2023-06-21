function carregar() {
var txth = document.getElementById('txthoras')
var imagemFundo = document.getElementById('imagem')

var agora = new Date()
var hora = agora.getHours()

hora = 18
txth.innerHTML = `Agora são ${hora} horas.`

if (hora < 12) {
    imagemFundo.src = 'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1'
} else if (hora < 18) {
    imagemFundo.src = 'https://images.pexels.com/photos/4011934/pexels-photo-4011934.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1'
    document.body.style.backgroundColor = 'rgba(255, 162, 93, 1)'
} else {
    imagemFundo.src = 'https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1'
    document.body.style.backgroundColor = 'rgba(0, 0, 111, 1)'
}
}