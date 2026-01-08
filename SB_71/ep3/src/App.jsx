import React from "react";
import Child from "./component/Child.jsx";

function App() {
  const message = "Hello from Parent Component";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent Component </h1>
      <Child message={message} />
    </div>
  );
}

export default App;
