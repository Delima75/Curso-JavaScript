
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // esta função pega a data atual do sistema 
    var hora = data.getHours() //esta função pega a hora atual do sistema  
    

    
    msg.innerHTML = `Agora são horas.`  
   
    if (hora >= 0 && hora < 12) {
        // Bom dia 
        img.src='imagens/manha.png' //img.src carrega o objeto que no caso é a foto
        document.body.style.background ='#cdc1ca'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src='imagens/tarde.png'
        document.body.style.background='#e3ecee '
    }else {
        //Boa noite
        img.src='imagens/noite.png'
        document.body.style.background='#3b799a'
    }
    
}
