import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 5) {
      document.body.style.backgroundColor = "#d1f7c4";
    } else {
      document.body.style.backgroundColor = "#f0f0f0";
    }
  }, [count]);

  return (
    <div className="container">
      <h1>useState & useEffect Example</h1>
      <p className="count">Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
