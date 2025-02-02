import { useState } from "react"
export const CountApp = ({ value }) => {
  const [count, setCount] = useState(value)
  const handleAdd = (i) => {
    switch (i) {
      case 1:
        setCount(count + 1);
      case -1:
        var num = count - 1;
        if (num < value) {
          setCount(value)
        }
        else {
          setCount(count - 1);
        }

      case 0:
        setCount(value);
    }
  }


  return (
    <>
      <button onClick={handleAdd(1)}>+1</button>
      <button onClick={handleAdd(-1)}>-1</button>
      <button onClick={handleAdd(value)}>Reincio</button>
    </>
  )



}