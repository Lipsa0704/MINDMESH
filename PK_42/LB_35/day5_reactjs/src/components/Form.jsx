import { useState } from "react";
import './Form.css';
function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(phoneNumber);
    console.log(email);
    console.log(address);

    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

     if (email.trim() === "") {
      setError("Kindly fill your email");
      return;
    }

     if (phoneNumber.trim() === "") {
      setError("Please fill you phone number");
      return;
    }

     if (address.trim() === "") {
      setError("Please fill the address");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
        <h1>Login Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {error && <p style={{ color: "black" }}>{error}</p>}
      <button>Submit</button>
    </form>
  );
}

export default Form;
  