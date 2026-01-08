import React from "react";
import Title from "./Title";

const Child=(props)=>{
  return(
    <>
      <Title name={props.name} place={props.place} age={props.age}/>
    </>
  )
}

export default Child;