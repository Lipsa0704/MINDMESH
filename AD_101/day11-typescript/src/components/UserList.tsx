import React, { useEffect, useState } from "react";
import { User } from "../types/User";
import { fetchUsers } from "../api/userApi";
import "../index.css";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading users...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <div className="user-name">{user.name}</div>
          <div className="user-email">{user.email}</div>
          <div className="chance-bar">
            <div
              className="chance-fill"
              style={{
                width: `${user.chance}%`,
                backgroundColor: user.chance > 70 ? "green" : user.chance > 40 ? "orange" : "red",
              }}
            ></div>
          </div>
          <div className="chance-text">{user.chance}% Chance</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
