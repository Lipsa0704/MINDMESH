import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "123456") {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <h2>Welcome to Dashboard</h2>;
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
