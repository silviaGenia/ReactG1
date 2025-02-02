import { useState } from "react"

export const CounterApp = ({ value }) => {

  const [count, setCount] = useState(value)


  const handleAdd = () => {
    //console.log("Sabados")
    //count++
    setCount(count + 1)

  }

  const handleSub = () => {
    if (count > value) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(value);
  }


  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleReset}>Reinicio</button>
    </>
  )
}
