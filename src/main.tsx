import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS imports
import "./css/reset.css";
import "/node_modules/leaflet/dist/leaflet.css";
import "./css/leaflet-reset.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
