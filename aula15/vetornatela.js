let valores = [8, 1, 7, 4, 2, 9]

// for(let pos = 0; pos < valores.length /* se a variavel for menor que o comprimento do array*/ ; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]/* que o valor que está na posição [pos] */}`)
// }

for(let pos in valores /*forma mais simplificada do for */){
    console.log(`A posição ${pos} tem o valor ${valores[pos]/* que o valor que está na posição [pos] */}`)
}