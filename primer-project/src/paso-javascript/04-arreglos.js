//const arreglo = []
//arreglo.push(1)
//arreglo.push(2)
//console.log(arreglo)

const num = [1, 2, 3, 4, 5]

console.log(num)

let arreglo2 = [...num, 6]

console.log(arreglo2)

let arreglo3 = arreglo2.map(function (numero) {
  return numero * 2
})

console.log(arreglo3)
