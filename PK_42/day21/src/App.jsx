import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const login = () => {
    setLoggedIn(true);
    setNotifications((n) => [...n, "User logged in 🔔"]);
  };

  const logout = () => {
    setLoggedIn(false);
    setNotifications((n) => [...n, "User logged out 🔔"]);
  };

  return (
    <div>
      <h1>Team Frontend Demo</h1>
      <h3>Team: Alpha Coders</h3>

      <p>Features:</p>
      <ul>
        <li>Mock Login / Logout</li>
        <li>State-based UI</li>
        <li>Real-time Notifications</li>
      </ul>

      {!loggedIn ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <h3>Status: {loggedIn ? "Logged In ✅" : "Logged Out ❌"}</h3>

      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
