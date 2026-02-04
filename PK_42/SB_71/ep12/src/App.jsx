import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8">
      {/* Card Container */}
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-red-600 text-black text-xl font-bold text-center py-4">
          Testing React Example
        </div>

        {/* Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {["Testing React", "Testing React", "Testing React", "Testing React"].map(
            (item, index) => (
              <div
                key={index}
                className="p-6 text-center font-semibold text-gray-700 border border-gray-200 
                           hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
