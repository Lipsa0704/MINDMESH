import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Suchismita")}>
      Login
    </button>
  );
};

export default Login;
