import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const login = () => {
    localStorage.setItem("token", "fake-jwt-token");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Authentication UI Demo</h2>

      {isLoggedIn ? (
        <>
          <p>Welcome, Ananya 👋</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login to continue</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
