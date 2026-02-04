import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setUser({ name: "Ananya" })}>
        Login
      </button>
      <button onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
};

export default Login;
