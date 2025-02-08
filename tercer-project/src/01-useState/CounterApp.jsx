import { useState } from "react"

export const CounterApp = () => {

  const [count, setCount] = useState(10)

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}
