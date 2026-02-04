import { useCallback } from "react";
import ListItem from "./components/ListItem";
import VirtualizedList from "./components/VirtualizedList";

function App() {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const handleClick = useCallback((item) => {
    alert(item);
  }, []);

  return (
    <div className="p-6 flex gap-10">
      {/* Memoized list (small list) */}
      <ul className="border rounded w-64">
        {items.slice(0, 30).map((item) => (
          <ListItem
            key={item}
            item={item}
            onClick={handleClick}
          />
        ))}
      </ul>

      <VirtualizedList items={items} />
    </div>
  );
}

export default App;
