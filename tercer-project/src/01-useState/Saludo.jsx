import { useState } from "react"


export const Saludo = () => {

  const [name, setName] = useState("")


  const actualizaInput = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <input type="text" placeholder="Escribe tu nombre" value={name} onChange={actualizaInput} />
      <h2>Hola, {name}</h2>
    </>
  )
}


/* onChange={(e) => setName(e.target.value) }*/