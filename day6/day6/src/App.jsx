import React, { useContext } from "react";
import { UserContext } from "./main";

function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={() => setUser("Pallavi")}>
        Change User
      </button>
    </div>
  );
}

export default App;
