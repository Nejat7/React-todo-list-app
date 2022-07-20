import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";
import "./sass/index.scss";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root"),
);
