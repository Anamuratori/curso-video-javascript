function contar() {
var txtinicio = document.getElementById('txtinicio')
var txtfim = document.getElementById('txtfim')
var txtpasso = document.getElementById('txtpasso')

var res = document.getElementById('res')




if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
    res.innerHTML = 'Impossível contar. Revise os dados!'
} else {
    res.innerHTML = 'Contando:<br>'
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    if (passo <= 0) {
        window.alert('Passo inválido. Será considerado o valor de 1.')
        passo = 1
    }
    
    if(inicio < fim) { //comtagem crescente
        for (let c = inicio; c <= fim; c+=passo) {
            res.innerHTML += `${c} \u{1F449}`
            
        }
    } else { //contagem decrescente
        for (let c = inicio; c >= fim; c-=passo) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += '\u{1F3C1}'
}





}