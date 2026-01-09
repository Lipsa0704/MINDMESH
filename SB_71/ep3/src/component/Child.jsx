function Child(props) {
  return (
    <div style={{ border: "1px solid purple", padding: "10px", marginTop: "10px" }}>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
}

export default Child;