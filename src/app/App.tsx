import React from "react";
import EvalContainer from "../EvalContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserApp from "../UserList/UserApp";
//FC -> 함수형 컴포넌트
// const App: React.FC = () => {
//   return <EvalContainer />;
// };

// const App: React.FC = () => {
//   return (
//     <Route>
//       <Routes>
//         <Route path="/evaluation" element={<EvalContainer />} />
//         {/* <Route path="test" element={} /> */}
//       </Routes>
//     </Route>
//   );
// };
// // function App() {
// //   return <EvalContainer />;
// // }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/evaluation" element={<EvalContainer />} />
        <Route path="/UserApp" element={<UserApp />} />
      </Routes>
    </Router>
  );
}

export default App;
