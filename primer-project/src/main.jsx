
import { frutas } from './data/frutas'

const getFrutasByid = (id) => {
  return frutas.find(fruta => fruta.id === id)
}
console.log(getFrutasByid(2))