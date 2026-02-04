import { useState, useEffect } from "react";

export default function App() {
  // useState pattern
  const [count, setCount] = useState(0);

  // useEffect pattern (runs when count changes)
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useState & useEffect Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
