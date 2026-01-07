import React, { useState, useEffect } from "react";

function App() {
  // useState: declare state
  const [count, setCount] = useState(0);

  // useEffect: runs after component renders
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // dependency array

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App