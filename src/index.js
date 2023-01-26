import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/js/bootstrap.js';
import "./index.css";
import "./css/theme.css";
import App from "./App";
import "./css/responsive.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
