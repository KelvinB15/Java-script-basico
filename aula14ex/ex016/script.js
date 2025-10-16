function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
       window.alert("Por favor, digite um número válido.")
    } else {
    var c = 1 
    var n = Number(num.value)
    tab.innerHTML = ''// limpa o conteúdo anterior
    // tab.style.textAlign = 'center'

   while(c <= 10){
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    c++
    // var r = num * v   
    // res.innerHTML += `${num} * ${v} = ${r}<br>` 
        }
    }
}
