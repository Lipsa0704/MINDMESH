import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      <h3>Welcome {user ? user.name : "Guest"}</h3>
    </div>
  );
};

export default Navbar;
