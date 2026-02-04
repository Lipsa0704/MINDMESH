import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    setMessage('Login Successful')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>

      <input
        placeholder="Username"
        id="username"
      />
      <br /><br />

      <input
        placeholder="Password"
        id="password"
        type="password"
      />
      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App
