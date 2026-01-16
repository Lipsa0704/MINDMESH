import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const UserContext = createContext();

function Main() {
  const [user, setUser] = useState("Guest");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
