//Funcion estandar
function saludar(nombre) {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar("Karla"))

//Funcion anonima
const saludar1 = function (nombre) {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar1("Carlos"))

//Funciones flechas
const saludar2 = (nombre) => {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar2("Jose"))


const saludar3 = (nombre) => `Hola mi nombre es: ${nombre}`


console.log(saludar3("Jonas"))


//Retorno de un Objeto
const getUser = () => {
  return {
    id: 122,
    nombre: 'Carlos'
  }
}


console.log(getUser())




const getUser1 = () => ({
  id: 122,
  nombre: 'Carlos'
})


console.log(getUser1())