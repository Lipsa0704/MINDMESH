import { useContext } from "react";
import AppContext from "../context/AppContext";

function Counter() {
  const { dispatch } = useContext(AppContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
