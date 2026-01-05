import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";

function Day27() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Day27;
