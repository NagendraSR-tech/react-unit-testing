import type { CounterTwoProps } from "./counter-two-types";

export const CounterTwo = (props: CounterTwoProps) => {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <div>
      <h2>Counter Two</h2>
      <p>Count: {count}</p>
      {handleIncrement && (
      <button onClick={handleIncrement}>Increment</button>
      )}

      {handleDecrement && (
      <button onClick={handleDecrement}>Decrement</button>
      )}
    </div>
  );
}
