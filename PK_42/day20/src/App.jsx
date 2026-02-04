import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const login = () => {
    // Mock authentication
    if (email === "test@gmail.com") {
      setLoggedIn(true);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setEmail("");
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, {email} 🎉</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
