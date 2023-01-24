import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from "recoil";

import Home from "./pages/home";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Home></Home>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
