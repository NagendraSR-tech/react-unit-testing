import { useState } from 'react'
import type { UseCounterProps } from './useCounter.types'

export const useCounter = ({ initialCount = 0 }: UseCounterProps) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  return { count, increment, decrement }
}
