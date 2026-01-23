import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Counter App (TypeScript)</h2>
      <p>Count: {count}</p>

      <button onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default App;
