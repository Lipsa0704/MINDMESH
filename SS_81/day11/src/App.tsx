import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app-container">
      <h2>Day 11 – Props & State Typing</h2>

      <UserCard name="Suchismita" age={22} isStudent={true} />

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
