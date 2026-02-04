import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
