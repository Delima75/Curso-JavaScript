// estou declarando como objeto 
let amigo ={nome:'jose',
    sexo:'M',
    peso:85.5,
         engordar(p){
         console.log('engordar')
         this.peso += p 
         }

}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//let amigo = [] // estou declarando como objeto tb mas é um array isso acontece pq são da mesma classe
