const persona = {
  nombre: 'Carlos',
  apellido: 'Herrera',
  edad: 12,
  direccion: {
    ciudad: 'Sucre',
    calle: 'Olañeta',
    numero: 500
  }
}
//console.log(persona)

const persona2 = { ...persona }
persona2.nombre = "Adrian"
console.log(persona)
console.log(persona2)


//console.table(persona)