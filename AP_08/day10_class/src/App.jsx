
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
    <div className='hlw h-130 w-105 flex items-center justify-center flex-col gap-2 ml-100 mt-10 border-4 border-black bg-emerald-400 '>
      <h2 className='bg-amber-400 h-10 w-80 text-2xl text-center rounded-sm text-red-600'>Custom Hooks Demo</h2>

      {isLoggedIn ? (
        <>
          <p className='text-cyan-100 text-xl'>Welcome User!</p>
          <button onClick={logout} className='bg-emerald-200 h-7 w-20 border-2 border-b-amber-900 rounded-2xl'>Logout</button>
        </>
      ) : (
        <button onClick={login} className='bg-emerald-200 h-7 w-20 border-2 border-b-amber-900 rounded-2xl'>Login</button>
      )}

      <h3 className='underline'>User List</h3>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
