import { useContext } from "react";
import AppContext from "../context/AppContext";

function Display() {
  const { state } = useContext(AppContext);

  return <h2>Count: {state.count}</h2>;
}

export default Display;
