import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (

      <div className="navbar">
      <h2>Contact Page</h2>
      <p>Contact us at shibanibardhan6@gmail.com</p>
       <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
    </div>
  );
}

export default Contact;
