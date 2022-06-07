import React from "react";
//state를 사용하기 위해 앞에서 만든 Provider를 가져옵니다.
import ColorProvider from "./ColorProvider.component";
import Red from "../components.Red";
const App2 = () => {
  return (
    //사용하고자 하는 자식들 컴포넌트들 가장 밖에서 <Provider>로 감싸줍니다.
    <ColorProvider>
      <Red />
    </ColorProvider>
  );
};
export default App2;
