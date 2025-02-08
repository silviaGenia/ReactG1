import { useState } from "react"


export const LoginForm = () => {
  const [email, setEmail] = useState("")
  return (
    <>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn btn-info " onClick={() => alert(`Email ingresado: ${email}`)}>Enviar</button>
    </>
  )
}
