import { useCounter } from "../hook/useCounter"


export const CounterHook = () => {

  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>Contando con Hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(3)} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}
