
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas ${min} minutos.`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src='imagens/manha.png'
    }else if(hora >= 12 && hora <= 18 ) {
        // Boa tarde
        img.src='imagens/tarde.png'
     } else{
         // bao noite
         img.src='imagens/noite.png'
     }
}

