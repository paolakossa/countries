import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "../src/routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
