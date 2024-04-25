import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
