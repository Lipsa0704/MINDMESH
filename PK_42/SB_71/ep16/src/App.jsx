import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@test.com" && password === "123456") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          E2E Login Demo
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            ✅ Login Successful
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-center text-red-600 font-semibold">
            ❌ Invalid Credentials
          </p>
        )}
      </div>
    </div>
  );
}
