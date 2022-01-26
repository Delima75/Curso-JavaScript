function parimpar(n){
    if (n%2==0){
        return 'par'
    }else {
        return 'impar'
    }
}
  // console.log(parimpar(4)) // esta linha faz a chamada mas não mosra pois é preciso por numa variavel como na linha de baixo
//let res = parimpar(4) // aqui eu precisei criar uma variavel para receber o retorno da chamada 
//console.log(res) // e aqui precisao chamar a variavel que recebeu o resutado ou retorno agora aparece na tela 
console.log(parimpar(223)) // assim escreve direto o valor do retorno, o 223/2 da resto 1 ou seja ele é impar 

