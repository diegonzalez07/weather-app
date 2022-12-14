import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { WeatherApp } from "./WeatherApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
