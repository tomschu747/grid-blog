/* ======================================================
    Lab 7 - main.jsx starter
====================================================== */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// TODO: 
// Use React createRoot syntax to mount the app. 
// Example: ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);