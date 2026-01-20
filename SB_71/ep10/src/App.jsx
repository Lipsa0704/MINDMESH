import { useFetch } from "./hooks/useFetch";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-700 to-pink-600 px-10 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Custom Hooks
      </h1>

      {/* Full Width Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* useAuth Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            useAuth Hook
          </h2>

          <p
            className={`font-bold mb-6 ${
              isLoggedIn ? "text-green-600" : "text-red-600"
            }`}
          >
            Status: {isLoggedIn ? "Logged In" : "Logged Out"}
          </p>

          <button
            onClick={isLoggedIn ? logout : login}
            className="px-8 py-2 rounded-full bg-indigo-700 text-white hover:bg-pink-600 transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* useFetch Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            useFetch Hook
          </h2>

          {loading && <p className="text-gray-500">Loading users...</p>}
          {error && <p className="text-red-600">{error}</p>}

          <ul className="mt-4 space-y-2">
            {data.slice(0, 6).map((user) => (
              <li
                key={user.id}
                className="w-full bg-gray-100 p-3 rounded-lg"
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
