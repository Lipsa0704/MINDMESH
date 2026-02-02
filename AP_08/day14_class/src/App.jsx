function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Accessible Login Form</h1>

      {/* Accessible form */}
      <form>
        <div>
          <label htmlFor="email">Email</label><br />
          <input id="email" type="email" />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label><br />
          <input id="password" type="password" />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
