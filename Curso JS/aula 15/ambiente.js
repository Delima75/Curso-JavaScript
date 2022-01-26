let num =[5,8,2,9,3]
num.push(1) // insere mais um elemento no final doi vetor 
//num.sort() // coloca o vetor em ordem crescente

//console.log(`Nosso vetor é o ${num}`)//se colocar o num apenas ele apresenta os valores com os colchetes

//console.log(`O vetor tem ${num.length} posições`)// a resposta é O vetro tem 5 posições
//console.log(num[0]) // mostra o valor da posição 0 que no caso é o 5

let pos = num.indexOf(4) // como o valor 4 naõ existe eel retorna -1
if (pos==-1){
    console.log(`O Valor não foi encontrado `)
}else {
    console.log(`O valor 8 esta na posição ${pos}`)
}


