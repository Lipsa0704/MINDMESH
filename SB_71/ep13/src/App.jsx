import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
 TypeScript Concept (for learning):
 type User = {
   name: string;
   age: number;
   isActive: boolean;
 };
*/

function App() {
  // Typed state (TypeScript version shown in comment)
  // const [user, setUser] = useState<User>({
  const [user, setUser] = useState({
    name: "Shibani",
    age: 21,
    isActive: true,
  });

  // Typed function example
  /*
  const toggleStatus = (): void => {
    setUser({ ...user, isActive: !user.isActive });
  };
  */

  const toggleStatus = () => {
    setUser({ ...user, isActive: !user.isActive });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 to-red-600 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center">
        
        <h1 className="text-3xl font-bold text-black-800 mb-4">
          TypeScript for React
        </h1>

        <p className="text-lg">
          <span className="font-semibold">Name:</span> {user.name}
        </p>

        <p className="text-lg">
          <span className="font-semibold">Age:</span> {user.age}
        </p>

        <p className="text-lg">
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`font-bold ${
              user.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {user.isActive ? "Active" : "Inactive"}
          </span>
        </p>

        <button
          onClick={toggleStatus}
          className="mt-6 w-full bg-yellow-600 text-white py-2 rounded-xl text-lg hover:bg-green-700 transition"
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
}

export default App;
