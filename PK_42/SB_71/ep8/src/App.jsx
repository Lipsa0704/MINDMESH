import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error fetching data</h2>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
