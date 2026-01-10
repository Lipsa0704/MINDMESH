import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="navbar">
      <h2>Home Page</h2>
      <p>Welcome to the Home page.</p>
      <nav >
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </nav>
      </div>
    </>
  );
}

export default Home;

