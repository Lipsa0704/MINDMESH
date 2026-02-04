import { useState, useEffect } from "react";

/* -------------------------------
   Custom Hook: useFetch
--------------------------------*/
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

/* -------------------------------
   Custom Hook: useAuth
--------------------------------*/
function useAuth() {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return { user, login, logout };
}

/* -------------------------------
   App Component
--------------------------------*/
function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { user, login, logout } = useAuth();

  return (
    <div>
      <h2>Auth Example</h2>

      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Pallavi")}>Login</button>
      )}

      <hr />

      <h2>Fetch Example</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <ul>
          {data.slice(0, 5).map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
