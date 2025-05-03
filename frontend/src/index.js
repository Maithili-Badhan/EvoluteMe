import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importing your App.jsx file
import "./index.css"; // If you have any global styles (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensures the app gets rendered inside the <div id="root"></div> in your index.html
);