import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error fetching users</h3>;

  return (
    <div>
      <h2>Users List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
