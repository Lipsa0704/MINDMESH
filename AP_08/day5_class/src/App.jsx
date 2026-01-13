import React, {useState} from "react";
import './App.css'

const App=()=>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  const validate = () => {
  let newErrors = {};

    if (!name) newErrors.name = "Name is required";

    if (!email) newErrors.email = "Email is required";
    else if (!email.includes("@"))
      newErrors.email = "Email is not valid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully ✅");
    }
  };
  return(
    <>
      <div className="section">
        <h1>Registation link</h1>
        <form action="">
          <label> Name:</label>
          <input type="text" placeholder="Enter name" value={name}
            onChange={(e) => setName(e.target.value)}/>
          <label> Email:</label>
          <input type="email" placeholder="Enter Email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <label> Password:</label>
          <input type="password" placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button>Submit</button>
        </form>

      </div>
      
    </>
  )
}

export default App;