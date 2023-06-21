function calcular() {

    var txtnum = document.getElementById('txtnumero')
    var res = document.getElementById('selectionPanel')

    

    if (txtnum.value.length == 0) {
        window.alert('Por favor, digite um número!')

    } else {
        var n = Number(txtnum.value)

        res.innerHTML = ''
        
        for (let i = 1; i <= 10; i++) {
            let option = document.createElement('option')
            option.value = `tab ${i}`
            option.innerHTML = `${n} x ${i} = ${n*i}`
            res.appendChild(option)
            
        }

    }
}