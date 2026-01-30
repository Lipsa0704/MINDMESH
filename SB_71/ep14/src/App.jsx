import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

export default function App() {
  const topics = [
    "Accessibility in React",
    "A11y patterns for SPAs",
    "Fix a11y issues",
    "A11y commit",
    "A11y demo",
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <header className="w-full bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-semibold text-black-800">
          Accessibility (A11y) in React
        </h1>
      </header>

      {/* Main Content */}
      <main
        className="w-full px-6 py-8"
        role="main"
        aria-label="Accessibility topics"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topics.map((item, index) => (
            <article
              key={index}
              tabIndex="0"
              role="region"
              aria-label={item}
              className="bg-white border rounded-md p-4
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h2 className="text-base font-medium text-gray-800">
                {item}
              </h2>

              <p className="text-sm text-gray-600 mt-2">
                Basic example demonstrating accessibility in React.
              </p>

              <button
                className="mt-3 w-full text-sm bg-blue-600 text-black py-2 rounded
                           hover:bg-blue-700 focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
                aria-label={`View details about ${item}`}
              >
                View
              </button>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-3 text-sm text-gray-600">
        © Accessibility Demo • React
      </footer>
    </div>
  );
}
