function Wrapper({ children }) {
  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h3>Wrapper Component</h3>
      {children}
    </div>
  );
}

export default Wrapper;
