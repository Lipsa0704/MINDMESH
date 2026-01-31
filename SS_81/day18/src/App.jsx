import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3000"); // demo server

function App() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    socket.on("connect", () => {
      setStatus("Connected to server ✅");
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  const sendMessage = () => {
    alert("Hello sent (demo)");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Socket.IO Client</h1>
        <p className="status">{status}</p>
        <button onClick={sendMessage}>Send Hello</button>
      </div>
    </div>
  );
}

export default App;
