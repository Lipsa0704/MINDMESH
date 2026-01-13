import { useContext } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
