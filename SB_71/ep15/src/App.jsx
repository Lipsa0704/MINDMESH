import React, { useState, useMemo } from "react";
import './App.css'

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const itemHeight = 50;
  const boxHeight = 400;

  // Big list (memoized)
  const items = useMemo(
    () => Array.from({ length: 1000 }, (_, i) => `List Item ${i + 1}`),
    []
  );

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(boxHeight / itemHeight);
  const visibleItems = items.slice(
    startIndex,
    startIndex + visibleCount + 1
  );

  return (
    <div className="min-h-screen w-full bg-blue-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
       React Performance Optimization Demo
      </h1>

      {/* LIST CONTAINER */}
      <div
        className="w-full bg-white border rounded-lg overflow-auto"
        style={{ height: boxHeight }}
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
      >
        {/* INNER SPACE */}
        <div
          className="relative w-full"
          style={{ height: items.length * itemHeight }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              className="absolute left-0 w-full border-b px-4 py-3"
              style={{
                top: (startIndex + index) * itemHeight,
                height: itemHeight,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}