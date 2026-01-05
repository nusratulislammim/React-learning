import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link>
      <br />
      <Link to="settings">Settings</Link>
      <Outlet />
    </>
  );
}

export default Dashboard;
