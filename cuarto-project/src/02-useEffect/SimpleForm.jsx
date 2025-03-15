import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje"


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "karla2",
    email: "karla@gamil.com"
  })

  const { username, email } = formState


  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  /*   useEffect(() => {
      console.log("email Cambio")
    }, [email])
  
    useEffect(() => {
      console.log("username Cambio")
    }, [username]) */





  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="name@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {(username === "karla2") && <Mensaje />}
    </>
  )
}
