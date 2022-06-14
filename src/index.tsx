import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <App />
  //스위치모드때문에 두번 실행 된다고 함
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
