import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // STEP 1: LOGIN FORM
  if (step === 1) {
    return (
      <div>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={() => setStep(2)}>Preview</button>
      </div>
    );
  }

  // STEP 2: PREVIEW
  if (step === 2) {
    return (
      <div>
        <h2>Preview Details</h2>
        <p>Email: {email}</p>
        <p>Password: {password}</p>

        <button onClick={() => setStep(1)}>Back</button>
        <button onClick={() => setStep(3)}>Confirm</button>
      </div>
    );
  }

  // STEP 3: SUCCESS
  return <h2>Login Successful ✅</h2>;
}

export default App;
