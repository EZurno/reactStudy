import React from "react";
import ReactDOM from "react-dom/client";
import CoinTracker from "./CoinTracker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <CoinTracker />
  // </React.StrictMode> UseEffect 속 함수가 두번 실행되므로 주석 처리
);
