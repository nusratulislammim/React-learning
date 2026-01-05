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
import Day13 from "../pages/day-13";
import Day14 from "../pages/day-14";
import Day15 from "../pages/day-15";
import Day16 from "../pages/day-16";
import Day17 from "../pages/day-17";
import Day18 from "../pages/day-18";
import Day19 from "../pages/day-19";
import Day20 from "../pages/day-20";
import Day21 from "../pages/day-21";
import Day22 from "../pages/day-22";
import Day23 from "../pages/day-23";
import Day24 from "../pages/day-24";
import Day25 from "../pages/day-25";
import Day26 from "../pages/day-26";
import Day27 from "../pages/day-27";
import Day28 from "../pages/day-28";
import Day29 from "../pages/day-29";
import Day30 from "../pages/day-30";
import Day31 from "../pages/day-31";





import Practice from "../pages/practice";
import BrandPage from "../pages/projects/BrandPage";

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
        <Route path="/day-13" element={<Day13 />} />
        <Route path="/day-14" element={<Day14 />} />
        <Route path="/day-15" element={<Day15 />} />
        <Route path="/day-16" element={<Day16 />} />
        <Route path="/day-17" element={<Day17 />} />
        <Route path="/day-18" element={<Day18 />} />
        <Route path="/day-19" element={<Day19 />} />
        <Route path="/day-20" element={<Day20 />} />
        <Route path="/day-21" element={<Day21 />} />
        <Route path="/day-22" element={<Day22 />} />
        <Route path="/day-23" element={<Day23 />} />
        <Route path="/day-24" element={<Day24 />} />
        <Route path="/day-25" element={<Day25 />} />
        <Route path="/day-26" element={<Day26 />} />
        <Route path="/day-27" element={<Day27 />} />
        <Route path="/day-28" element={<Day28 />} />
        <Route path="/day-29" element={<Day29 />} />
        <Route path="/day-30" element={<Day30 />} />
        <Route path="/day-31" element={<Day31 />} />




        <Route path="/projects/BrandPage" element={<BrandPage />} />


        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
