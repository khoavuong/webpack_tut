import React from "react";
import Custom from "../assets/customs.svg";

const test = 0 ? "test1" : "test2";

const SVG = () => {
  return (
    <div>
      <Custom />
      {test}
    </div>
  );
};

export default SVG;
