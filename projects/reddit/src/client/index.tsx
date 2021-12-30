import React from "react";
import ReactDOM from "react-dom";
import {App} from "../app";

window.addEventListener("load", () => {
  ReactDOM.hydrate(<App/>, document.getElementById("root"));
})