import { useQuery } from "@tanstack/react-query";

function App() {
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading data</h3>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
