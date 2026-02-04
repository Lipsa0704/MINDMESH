import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Rahul")} style={{marginTop:"300px" , marginLeft:"700px",height:"50px",width:"150px",backgroundColor:"blue",color:"white",fontSize:"20px"}}>
      Login
    </button>
  );
}

export default Login;
