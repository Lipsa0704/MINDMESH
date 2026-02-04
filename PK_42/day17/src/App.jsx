import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Mock API call based on contract
  const loginAPI = async (data) => {
    // Simulating backend response
    if (data.email === "test@gmail.com" && data.password === "123456") {
      return {
        success: true,
        token: "abc123",
        user: { name: "Test User" }
      };
    } else {
      return { success: false };
    }
  };

  const handleLogin = async () => {
    const response = await loginAPI({ email, password });

    if (response.success) {
      setMessage("Welcome " + response.user.name);
    } else {
      setMessage("Login Failed");
    }
  };

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

      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
