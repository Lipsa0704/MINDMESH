import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogin = () => {
    if (email && password) {
      const fakeToken = "abc123TOKEN";
      localStorage.setItem("token", fakeToken);
      setLoggedIn(true);
    } else {
      alert("Please enter email & password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="card">
        {!loggedIn ? (
          <>
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
          </>
        ) : (
          <>
            <h2>User Logged In ✅</h2>
            <p>Token stored in localStorage</p>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
