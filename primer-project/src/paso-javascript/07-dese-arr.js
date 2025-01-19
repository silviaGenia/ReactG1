const notas = ['A', 'B', 'C', 'D', 'E', 'F']

console.log(notas)
console.log(notas[0])
console.log(notas[1])


const [, , c] = notas
console.log(c)


const retornaarreglo = () => {
  return ['ABC', 123]
}

const [a, numeros] = retornaarreglo()

console.log(a, numeros)
//-------------------------

const usestate = (valor) => {
  return [
    valor, () => {
      console.log("Hola clase")
    }
  ]
}

const [nombre, setNombre] = usestate("Carlos")
console.log(nombre)
setNombre()