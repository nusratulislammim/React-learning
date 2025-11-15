import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Day01 from "../pages/day-01";
import Day02 from "../pages/day-02";
import Day03 from "../pages/day-03";
import Day04 from "../pages/day-04";
import Day05 from "../pages/day-05";
import Day06 from "../pages/day-06";
import Day07 from "../pages/day-07";
import Day08 from "../pages/day-08";
import Day09 from "../pages/day-09";
import Day10 from "../pages/day-10";
import Day11 from "../pages/day-11";


import Practice from "../pages/practice";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/day-01" />} />
        <Route path="/day-01" element={<Day01 />} />
        <Route path="/day-02" element={<Day02 />} />
        <Route path="/day-03" element={<Day03 />} />
        <Route path="/day-04" element={<Day04 />} />
        <Route path="/day-05" element={<Day05 />} />
        <Route path="/day-06" element={<Day06 />} />
        <Route path="/day-07" element={<Day07 />} />
        <Route path="/day-08" element={<Day08 />} />
        <Route path="/day-09" element={<Day09 />} />
        <Route path="/day-10" element={<Day10 />} />
        <Route path="/day-11" element={<Day11 />} />

        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
