import React from "react";
import ReactDOM from "react-dom/client";
import UseEffect from "./UseEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <UseEffect />
  // </React.StrictMode> UseEffect 속 함수가 두번 실행되므로 주석 처리
);
