import React from "react";
import "./App.css";

function App() {
  const userName = "Shibani";

  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      <Parent name={userName} />
    </div>
  );
}

// Parent Component
function Parent({ name }) {
  return (
    <div className="box parent">
      <h2>Parent</h2>
      <Child name={name} />
    </div>
  );
}

// Child Component (does not use the prop)
function Child({ name }) {
  return (
    <div className="box child">
      <h2>Child</h2>
      <GrandChild name={name} />
    </div>
  );
}

// GrandChild Component (uses the prop)
function GrandChild({ name }) {
  return (
    <div className="box grandchild">
      <h2>GrandChild</h2>
      <p>Hello, {name} 👋</p>
    </div>
  );
}

export default App;
