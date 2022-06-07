//마찬가지로 useContext를 import합니다.
import React, { useContext } from "react";
import ColorContext from "../Context/Color.context";

const Green = () => {
  //useContext(Context)를 사용하여 사용할 준비를 합니다.
  const value = useContext(ColorContext);
  return (
    <div className="green">
      //정의했던 state.변수명을 사용해 주면 됩니다.
      <span className="number">{value.number}</span>
    </div>
  );
};
export default Green;
