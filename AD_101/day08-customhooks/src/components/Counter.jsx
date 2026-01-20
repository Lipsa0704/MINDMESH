import useCounter from "../hooks/useCounter";
import "./styles/Counter.css";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter-box">
      <h2>Counter App</h2>
      <p className="count">{count}</p>

      <div className="btn-group">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
