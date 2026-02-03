// src/App.jsx
import { useEffect } from "react";
import socket from "./socket/Socket";
import Notifications from "./components/Notifications";

function App() {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Real-time Notifications
      </h1>
      <Notifications />
      <button
  onClick={() =>
    socket.emit("notification", {
      message: "Test notification 🚀",
    })
  }
  className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
>
  Send Test Notification
</button>

    </div>
  );
}

export default App;
