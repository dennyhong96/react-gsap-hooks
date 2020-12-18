import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { NavContextProvider } from "./context/NavContext";

import App from "./App";
import "./styles/App.scss";

ReactDOM.render(
  <NavContextProvider>
    <Router>
      <App />
    </Router>
  </NavContextProvider>,
  document.getElementById("root")
);
