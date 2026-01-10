import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Routes,Route, BrowserRouter} from "react-router-dom";

const App=()=>{
  return(
    <>
      
      <BrowserRouter>
         <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;