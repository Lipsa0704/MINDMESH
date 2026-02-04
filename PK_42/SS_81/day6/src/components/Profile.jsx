import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return <h3>Welcome {user}</h3>;
};

export default Profile;
