import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if (window.location.pathname !== "/") {
  window.history.replaceState(null, "", `/${window.location.hash}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
