import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

/* Fetch function */
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

/* Add function */
const addUser = async (user) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

function App() {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  /* Fetch users */
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  /* Add user */
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setName("");
    },
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query Example</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => mutation.mutate({ name })}>
        Add User
      </button>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
