import React, { useState, useEffect } from "react";

import EvalTop from "./EvalTop/EvalTop";
import Header from "./Header/Header";
import MainContainer from "./Main/MainContainer";

function EvalContainer() {
  return (
    <div className="module_wrap">
      <Header />

      <div className="inner">
        <EvalTop />
        <MainContainer />
      </div>
    </div>
  );
}

export default EvalContainer;
