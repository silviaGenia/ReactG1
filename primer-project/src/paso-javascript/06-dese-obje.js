const persona = {
  nombre: 'Carlos',
  apellido: 'Herrera',
  edad: 12
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)


const { nombre, apellido } = persona
console.log(nombre, apellido)


const retornaPersona = (usuario) => {
  //console.log(usuario)
  const { nombre, apellido } = usuario
  console.log(nombre)
}


retornaPersona(persona)




const retornaPersona2 = ({ nombre, apellido }) => {

  console.log(nombre, apellido)
}


retornaPersona2(persona)




const useContext = ({ nombre, apellido }) => {

  return {
    primeroNombre: nombre,
    primerApellido: apellido
  }
}


const { primeroNombre, primerApellido } = useContext(persona)

console.log(primeroNombre, primerApellido)