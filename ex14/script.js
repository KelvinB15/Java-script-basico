function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'manha_imagem.jpg'
    document.body.style.background = '#BFA41B'
} else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = 'tarde_imagem.jpg'
    document.body.style.background = '#F29F05'
} else{
    // BOA NOITE!
    img.src = 'noite_imagem.jpg'
    document.body.style.background = '#034AA6'
}
}