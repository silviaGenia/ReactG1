


export const ButtonApp = ({ value }) => {

  const click = () => {
    console.log("Buenos dias clase")
  }

  return (
    <>
      <h1>Button</h1>
      <h2>{value}</h2>
      <button onClick={click}>Enviar</button>
    </>
  )
}
