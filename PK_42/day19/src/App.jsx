import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = "New message received 🔔";

    setNotifications((prev) => [...prev, newNotification]);
  };

  return (
    <div>
      <h2>Notifications</h2>

      <button onClick={addNotification}>
        Simulate Notification
      </button>

      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
