import { useState, memo } from "react";

const Item = memo(({ value }) => {
  return <li>{value}</li>;
});

function App() {
  const [count, setCount] = useState(0);

  const list = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <ul>
        {list.map((item, index) => (
          <Item key={index} value={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
