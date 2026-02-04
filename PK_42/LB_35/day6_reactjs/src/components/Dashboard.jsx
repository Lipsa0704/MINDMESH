import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2  style={{marginTop:"300px" , marginLeft:"700px"}}>Welcome {user}</h2>
      <button onClick={() => setUser(null)} 
        style={{marginTop:"10px" , marginLeft:"700px",height:"50px",width:"150px",backgroundColor:"blue",color:"white",fontSize:"20px"}}>
        Logout
      </button>
    </>
  );
}

export default Dashboard;
