function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Frontend CI/CD Demo</h1>

      <section>
        <h2>1. Development</h2>
        <p>Code runs locally using dev server.</p>
      </section>

      <section>
        <h2>2. Build</h2>
        <p>Production-ready files are generated.</p>
      </section>

      <section>
        <h2>3. Preview</h2>
        <p>Built app is tested before deployment.</p>
      </section>
    </div>
  );
}

export default App;
