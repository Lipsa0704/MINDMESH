import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Accessible SPA</h1>
      </header>

      <nav
        aria-label="Main navigation"
        className="bg-white shadow p-4 flex gap-4"
      >
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>

      <main
        id="main-content"
        className="p-6 max-w-3xl mx-auto"
      >
        {children}
      </main>

      <footer className="mt-58.5 bg-gray-800 text-white text-center p-4 ">
        © 2026
      </footer>
    </div>
  );
}

export default Layout;
