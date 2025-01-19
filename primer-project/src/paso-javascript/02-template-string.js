const nombre = "Juan"
const apellido = "Herrera"

const nombreCompleto = nombre + ' ' + apellido

console.log(nombreCompleto)


const nombreCompleto1 = `El nombre completo es ${nombre} ${apellido}`
console.log(nombreCompleto1)

const nombreCompleto2 = `El nombre completo es:
${nombre} 
${apellido}
${1 + 1}
`
console.log(nombreCompleto2)


function getSaludo() {
  return 'Buenos Dias'
}

console.log(`Este es el mensaje de la funcion: ${getSaludo()}`)