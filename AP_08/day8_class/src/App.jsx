import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from './api'
import './App.css'

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3>Error fetching data</h3>

  return (
    <div>
      <h2>React Query Demo (Server State)</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
