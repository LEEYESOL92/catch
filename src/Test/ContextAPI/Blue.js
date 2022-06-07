//저장소를 가져오기위해 useContext를 import합니다.
import React, { useContext } from "react";
import ColorContext from "../Context/Color.context";
import Green from "./Green";
const Blue = () => {
  //원하는 함수를 useContext(Context)로 불러옵니다.
  const { increase, decrease } = useContext(ColorContext);
  return (
    <div className="blue">
      //그리고 아래와 같이 사용하면 됩니다.
      <button className="increment" onClick={increase}>
        inc
      </button>
      <button className="decrement" onClick={() => decrease()}>
        dec
      </button>
      <Green>green</Green>
    </div>
  );
};

export default Blue;
