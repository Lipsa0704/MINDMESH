import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          API Contract Design Demo
        </h1>

        <p className="text-center text-gray-600 mb-8">
          OpenAPI / Swagger – API Specification Preview
        </p>

        {/* API Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            API Details
          </h2>
          <div className="bg-gray-100 rounded-lg p-4 text-sm">
            <p><b>Title:</b> User Management API</p>
            <p><b>Version:</b> 1.0.0</p>
            <p><b>Base URL:</b> /api/v1</p>
          </div>
        </div>

        {/* Endpoints */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            API Endpoints
          </h2>

          <div className="space-y-4">
            {/* GET */}
            <div className="border rounded-lg p-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold text-sm">
                GET
              </span>
              <span className="ml-3 font-mono text-sm">
                /users
              </span>
              <p className="text-gray-600 mt-2">
                Fetch all users
              </p>
            </div>

            {/* POST */}
            <div className="border rounded-lg p-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold text-sm">
                POST
              </span>
              <span className="ml-3 font-mono text-sm">
                /users
              </span>
              <p className="text-gray-600 mt-2">
                Create a new user
              </p>
            </div>

            {/* PUT */}
            <div className="border rounded-lg p-4">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded font-semibold text-sm">
                PUT
              </span>
              <span className="ml-3 font-mono text-sm">
                /users/{`{id}`}
              </span>
              <p className="text-gray-600 mt-2">
                Update user details
              </p>
            </div>

            {/* DELETE */}
            <div className="border rounded-lg p-4">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded font-semibold text-sm">
                DELETE
              </span>
              <span className="ml-3 font-mono text-sm">
                /users/{`{id}`}
              </span>
              <p className="text-gray-600 mt-2">
                Delete a user
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          📄 API contract defined before frontend & backend implementation
        </div>
      </div>
    </div>
  );
}
