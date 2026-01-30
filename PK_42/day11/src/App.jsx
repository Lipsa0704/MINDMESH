import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="count">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
