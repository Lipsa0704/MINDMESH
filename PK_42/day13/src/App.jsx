function App() {
  return (
    <div>
      <h2>Accessible Example</h2>

      {/* Input with label */}
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" />

      <br /><br />

      {/* Real button */}
      <button onClick={() => alert("Submitted")}>
        Submit
      </button>
    </div>
  );
}

export default App;
