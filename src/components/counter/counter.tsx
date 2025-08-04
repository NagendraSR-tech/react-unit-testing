import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value === '' ? 0 : parseInt(e.target.value))
        }
      />
      <button onClick={() => setCount(amount || 0)}>Set</button>
    </div>
  )
}
