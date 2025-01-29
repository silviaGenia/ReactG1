import { frutas } from './data/frutas'

const getFrutasByid = (id) => {
  return frutas.find(fruta => fruta.id === id)
}
console.log(getFrutasByid(2))




import { frutas } from './data/frutas'

const getFrutasByid1 = (id) => {
  return frutas.find((fruta) => {
    if (fruta.id === id) {
      return true
    } else {
      return false
    }
  })
}
console.log(getFrutasByid1(2))



const getFrutasByOwner = (color) => frutas.filter((fruta) => fruta.color === color)


console.log(getFrutasByOwner("rojo"))