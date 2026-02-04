import React, { useState, useEffect } from "react";

const Home=()=>{
  const [count,setCount]=useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
   return(
    <>
      <div className="content">
        <p className="para"> Number is {count}</p>
        <button id="btn" onClick={()=>{setCount(count+1)}}>Click me</button>
      </div>
    </>
   )
}

export default Home;