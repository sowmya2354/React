import React from "react";
import IteratingList from "../Components/IteratingList";

export default function Data() {
  const myArray = ["sowmya", "sridhar", "lalitha", "vamsi"];

  return (
    <div>
      <IteratingList datalist={myArray} />
    </div>
  );
}
