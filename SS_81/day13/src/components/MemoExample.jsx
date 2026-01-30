import React, { useState, useMemo } from "react";

const ExpensiveComponent = React.memo(({ number }) => {
  console.log("Rendering Expensive Component");
  return <h3>Calculated Value: {number * 2}</h3>;
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const memoValue = useMemo(() => {
    return count;
  }, [count]);

  return (
    <div className="box">
      <h2>Memoization Example</h2>
      <input
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ExpensiveComponent number={memoValue} />
    </div>
  );
};

export default MemoExample;
