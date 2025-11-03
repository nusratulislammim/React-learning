import React from "react";
import One from "../day-03/One";
import Two from "../day-03/Two";

const Day03 = () => {
  return (
    <div>
      <h2>Day 03: Introducing JSX</h2>
      <One/>
      <Two number="5" color="green" />
    </div>
  );
};

export default Day03;
