import { useState } from "react"


export const CounterApp = () => {

  const [state, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = state

  return (
    <>
      <h1>Contador: {counter1}</h1>
      <h1>Contador: {counter2}</h1>
      <h1>Contador: {counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setCount({
        ...state,
        counter1: counter1 + 1,
      })}>+1</button>
    </>
  )
}
