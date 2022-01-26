function soma(n1, n2){
    return n1 + n2
}
console.log(soma(13)+ ' usando apenas parametros simples') 
                      // esta é a chamada da função com os parametos que subirão para n1 e n2
                      // se eu passar apenas um paramento ele retona NaN 
                      // para resolver isso posso por parametros opcionais veja abaixo 

function soma1(n1=0, n2=0){
     return n1 + n2
}
console.log(soma1(13)+ ' usando parametos opcionais ') 