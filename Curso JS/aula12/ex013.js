var agora = new Date()
var diaSem = agora.getDay()  /* 0 = Domingo 1 = segunda  2 = terça 3 = quarta  4 = qunta  5 = sexta 6 = sabado  */
//diaSem=9
//console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda-feira')
        break    
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('Hoje é quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break    
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sábado')
        break                
    default:
        console.log('[ERRO] Dia invalido')
        break
    }

    