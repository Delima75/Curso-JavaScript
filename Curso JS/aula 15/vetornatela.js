let valor = [8,1,7,4,2,9]
/*
console.log(valor)
console.log(valor[0])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
console.log(valor[5])
*/
/*for(pos=0;pos < valor.length;pos++){                             //esta maneiora é tradicional
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}
*/

for(let pos in valor){
    console.log(`A posição ${pos} tem o valor${valor[pos]}`)   // mas simplificado quanto menos escrever num código melhor ]
}


