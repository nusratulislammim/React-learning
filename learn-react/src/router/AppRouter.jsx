import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Day01 from "../pages/day-01";
import Day02 from "../pages/day-02";
import Day03 from "../pages/day-03";
import Day04 from "../pages/day-04";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/day-01" />} />
        <Route path="/day-01" element={<Day01 />} />
        <Route path="/day-02" element={<Day02 />} />
        <Route path="/day-03" element={<Day03 />} />
        <Route path="/day-04" element={<Day04 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
