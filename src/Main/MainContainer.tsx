import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import EvalList from "./EvalList/EvalList";
import EvalMiddle from "./EvalMiddle/EvalMiddle";
import EvalProvider from "./Stores/EvalProvider.component";
import EvalContext from "./Stores/EvalContext";

function MainContainer() {
  const [SuhumList, setSuhumNo] = useState([]);
  const [SuhumNo, selSuhumNo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3005/user/list");
      setSuhumNo(response.data.data);
      selSuhumNo(response.data.data[0].SuhumNo);
    }
    fetchData();
  }, []);

  return (
    <EvalProvider>
      <div className="module_boxs">
        <EvalList suhumList={SuhumList} />
        <EvalMiddle />
      </div>
    </EvalProvider>
  );
}

export default MainContainer;
