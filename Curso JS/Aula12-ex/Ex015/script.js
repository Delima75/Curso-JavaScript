function verificar(){
var data = new Date()
var ano = data.getFullYear() 
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] verifique os dado e tenten novamente')
   } else {
       
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero ='' // variavel inicia com strng valor vazio
       var img = document.createElement('img')
       
       img.setAttribute('id','foto') // Este comando cria dianmicamente por JAvascript uma tag img 
       if (fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade <10){
               // Criança
               img.setAttribute('src','imagens/bebe-m.png') // o setAtributte ira´criar a ligação para a tag img criada dinamicamente é preciso descrever o caminho correto 

           }else if(idade >= 10 && idade < 21){
            // jovem
            img.setAttribute('src','imagens/jovem-h.png')
            
           }else if(idade < 50){
               //Adulto 
               img.setAttribute('src','imagens/homem.png')
           }else { 
               //idoso 
               img.setAttribute('src','imagens/idoso.png')
           }
           
        } else if (fsex[1].checked){
           genero ='Mulher'
           if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src','imagens/bebe-f.png')

        }else if(idade >= 10 && idade < 21){
         // jovem
         img.setAttribute('src','imagens/jovem-m.png')
         
        }else if(idade < 50){
            //Adulto 
            img.setAttribute('src','imagens/mulher.png')
        }else { 
            //idoso 
            img.setAttribute('src','imagens/idosa.png')
        }
       }
       res.style.textAlign = 'center' // centraliza o texto por javascript
       res.innerHTML =`Detectamos ${genero} com ${idade} anos` 
       res.appendChild(img) // este appendChild adiciona um elemento da tag IMG no caso 
  }
}