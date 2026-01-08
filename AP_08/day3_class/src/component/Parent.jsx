import React from "react";
import Child from "./Child";

const Parent=(props)=>{
  return(
    <>
      <Child name={props.name} place={props.place} age={props.age}/>
    </>
  )
}

export default Parent;