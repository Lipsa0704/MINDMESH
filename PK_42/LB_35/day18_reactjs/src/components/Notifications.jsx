// src/components/Notifications.jsx
import { useEffect, useState } from "react";
import socket from "../socket/Socket";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <div className="space-y-2">
      {notifications.length === 0 && (
        <p className="text-gray-500">No notifications yet</p>
      )}

      {notifications.map((n, index) => (
        <div
          key={index}
          className="bg-blue-100 border border-blue-300 p-3 rounded"
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
