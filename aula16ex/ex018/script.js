let num = document.getElementById('txtn')
let selectionPanel = document.getElementById('selectionPanel')
let res = document.getElementById('res')
let lista = []


function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista (n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(Number(num.value))
        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado.`
        selectionPanel.appendChild(option)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {

    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let resultado = 0
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]

        for (let posicao in lista) {
            resultado += lista[posicao]
            if (lista[posicao] > maior) {
                maior = lista[posicao]
            }
            if (lista[posicao] < menor) {
                menor = lista[posicao]
            }
        }
        let media = resultado / total

        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} valores cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores temos ${resultado}.<br>`
        res.innerHTML += `A média dos valores digitados é ${media}.`
    
        

    }

}
