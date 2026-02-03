import React from "react";
import UserList from "./components/UserList";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>User Chance Dashboard</h1>
      <UserList />
    </div>
  );
};

export default App;
