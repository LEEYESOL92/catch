import React, { useEffect, useState } from "react";
import axios from "axios";

import EvalList from "./EvalList/EvalList";
import EvalMiddle from "./EvalMiddle/EvalMiddle";
import EvalProvider from "./Stores/EvalProvider.component";

function MainContainer() {
  const [SuhumList, setSuhumNo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3005/user/list");
      setSuhumNo(response.data.data);
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
