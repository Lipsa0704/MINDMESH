import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="container">
      <h1>Day 12 – Accessibility (A11y)</h1>

      {/* Accessible Button */}
      <button
        aria-expanded={open}
        aria-controls="info"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Info" : "Show Info"}
      </button>

      {/* Accessible section */}
      {open && (
        <section id="info" tabIndex="0">
          <p>This content is keyboard and screen-reader accessible.</p>
        </section>
      )}
    </main>
  );
}

export default App;
