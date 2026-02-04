import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.json();
};

function App() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"], 
    queryFn: fetchUsers, 
  });

 
  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  
  if (isError) {
    return <h2>Error fetching users</h2>;
  }

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
