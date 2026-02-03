import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("notification", (data) => {
      setMessage(data);
    });

    return () => socket.off("notification");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Real-time Notification</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
