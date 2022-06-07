import React, { useState } from "react";
import EvalContext from "./EvalContext";

const EvalProvider = ({ children }) => {
  const selSuhum = (SuhumNo) => {
    setSuhumNo((prevState) => {
      return {
        ...prevState,
        suhumNo: SuhumNo
      };
    });
  };

  const initialState = {
    suhumNo: "",
    selSuhum
  };
  const [suhumNo, setSuhumNo] = useState(initialState);

  return (
    <EvalContext.Provider value={suhumNo}>{children}</EvalContext.Provider>
  );
};

export default EvalProvider;
