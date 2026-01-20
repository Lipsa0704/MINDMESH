import useFetch from "../hooks/useFetch";
import "./styles/Users.css";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading users</h3>;

  return (
    <div className="users-box">
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

