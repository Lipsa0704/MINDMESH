import useInput from "../hooks/UseInput.jsx";

function Form() {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name.value);
    console.log("Email:", email.value);
  };

  return (
    <form onSubmit={handleSubmit} className="hooks">
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
