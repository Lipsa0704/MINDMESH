import { useState, lazy, Suspense } from "react";

// Lazy loaded component
const LazyComponent = lazy(() =>
  Promise.resolve({
    default: () => <h3>I am Lazy Loaded 🎉</h3>
  })
);

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Lazy Loading Demo</h2>

      <button onClick={() => setShow(true)}>
        Load Component
      </button>

      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
