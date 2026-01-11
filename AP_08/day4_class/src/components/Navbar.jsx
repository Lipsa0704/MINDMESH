import React from "react";
import {Link, useNavigate } from "react-router-dom";


const Navbar=()=>{
   const navigate= useNavigate();
  return(
    <>
      <header>
        <nav>
            <h1 className="ana">Ananya</h1>
            <ul className="lot">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              
           </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;