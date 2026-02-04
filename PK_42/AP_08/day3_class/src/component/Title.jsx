import React from "react";

const Title=(props)=>{
  return(
    <>
      <h1>Name:{props.name} </h1>
      <h1>Place:{props.place} </h1>
       <h1>Age:{props.age} </h1>
    </>
  )
}

export default Title;