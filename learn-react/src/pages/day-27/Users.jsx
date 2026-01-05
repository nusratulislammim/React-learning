import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <h2>Users</h2>
      <Link to="/user/1">User 1</Link>
      <br />
      <Link to="/user/2">User 2</Link>
    </>
  );
}

export default Users;
