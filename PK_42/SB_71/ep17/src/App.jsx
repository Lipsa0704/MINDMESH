import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [status, setStatus] = useState("idle");

  const runCIPipeline = () => {
    setStatus("running");

    // simulate CI build & deploy preview
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          CI/CD Frontend Demo
        </h1>

        <p className="text-center text-gray-600 mb-8">
          GitHub Actions – Build & Deploy Previews
        </p>

        <div className="flex justify-center">
          <button
            onClick={runCIPipeline}
            className="bg-emerald-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Run CI Pipeline
          </button>
        </div>

        <div className="mt-8 text-center">
          {status === "idle" && (
            <p className="text-gray-500">
              ⏸️ Pipeline not started
            </p>
          )}

          {status === "running" && (
            <p className="text-blue-600 font-semibold animate-pulse">
              ⚙️ Building & deploying preview...
            </p>
          )}

          {status === "success" && (
            <div>
              <p className="text-green-600 font-semibold">
                ✅ Build successful!
              </p>
              <p className="text-gray-600 mt-2">
                🌐 Preview deployed at:
              </p>
              <a
                href="#"
                className="text-emerald-600 font-semibold underline"
              >
                https://preview.myapp.com
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
