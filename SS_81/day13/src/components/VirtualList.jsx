const VirtualList = () => {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="box list">
      <h2>Virtualization Example</h2>
      <div className="scroll">
        {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
