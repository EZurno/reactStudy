import React from "react";
import ReactDOM from "react-dom/client";
import CleanUp from "./CleanUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <CleanUp />
  // </React.StrictMode> UseEffect 속 함수가 두번 실행되므로 주석 처리
);
