let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    // limitado de 1 a 100 que dentro deles será true
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    // verifica se na lista em o numero desejado, caso não tenha traga false
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function adicionar(){
    // só vai adicionar se os dois valores forem validos
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length  ==  0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        console.log(menor);

        for(let valor_atual of valores){
            soma += valor_atual
            
            if(valor_atual > maior){
                maior = valor_atual
            }
            
            if (valor_atual< menor){
                menor = valor_atual
                console.log(menor)
            }
            
        }
        console.log('------------')

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor infromado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>` 
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}