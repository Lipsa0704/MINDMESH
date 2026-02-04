import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const login = () => {
    setToken("mock_token_12345");
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-screen h-full bg-white p-10">

        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          Authentication UI Demo
        </h1>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center space-y-6 mt-20">
            <p className="text-gray-600 text-lg">
              Please login to continue
            </p>

            <button
              onClick={login}
              className="px-8 py-3 bg-indigo-600 text-black rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-6 mt-20">
            <div className="w-full max-w-3xl p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-green-700 font-semibold">
                Logged in successfully ✅
              </p>
              <p className="text-sm text-gray-600 break-all">
                Token: {token}
              </p>
            </div>

            <button
              onClick={logout}
              className="px-8 py-3 bg-red-500 text-black rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
