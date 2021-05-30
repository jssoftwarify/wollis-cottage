import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
