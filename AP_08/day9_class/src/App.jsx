import useFetch from './hooks/useFetch'
import useAuth from './hooks/useAuth'
import './App.css'

function App() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  const { isLoggedIn, login, logout } = useAuth()

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error occurred</h3>

  return (
    <div>
      <h2>Custom Hooks Demo</h2>

      {isLoggedIn ? (
        <>
          <p>Welcome User!</p>
          <button onClick={logout}>Loginn</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <h3>User List</h3>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
