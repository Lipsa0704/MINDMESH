import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

function VirtualizedList({ items }) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
  });

  return (
    <div
      ref={parentRef}
      className="h-[300px] w-[300px] overflow-auto border rounded"
    >
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            className="absolute left-0 right-0 border-b p-2"
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualizedList;
