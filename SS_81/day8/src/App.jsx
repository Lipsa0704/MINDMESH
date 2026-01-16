import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h2>Reusable Counter</h2>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>Reusable Fetch Hook</h2>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
}

export default App;
