import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#f0f0f0");

  useEffect(() => {
    console.log("useEffect is running. Count:", count);

    if (count >= 5) {
      setBgColor("#c8f7c5");
    } else {
      setBgColor("#f0f0f0");
    }
  }, [count]); // ✅ correct dependency

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>useEffect Working Example</h1>
      <p className="count">Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
