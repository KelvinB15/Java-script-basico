let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona numero (1) no final (length) do array
num.sort() // orderna em ordem asc o array
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // Informe o valor que está no array, que devolvera o posicionamente em que está o dado, caso não tenha, devolvera -1
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}