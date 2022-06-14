//createContext를 import 해줍니다.
import { createContext } from "react";

//직접 우리가
const EvalContext = createContext({
  suhumNo: "",
  selSuhum: (SuhumNo: any) => {
    console.log("!!!!!!", SuhumNo);
  }
});

export default EvalContext;
