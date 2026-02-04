import { Link } from "react-router-dom";

function About() {
  return (
      <div className="navbar">
      <h2>About Page</h2>
      <p>This page tells about the application.</p>
       <Link to="/"><button>Home</button></Link>
       <Link to="/contact"><button>Contact</button></Link>
    </div>
  );
}

export default About;
