import { useState } from "react";
import { SelectCity } from "./components/SelectCity";

export const WeatherApp = () => {
  const [city, setCity] = useState("miCity");
  const [extendedForecast, setExtendedForecast] = useState([]);

  return (
    <div className="container">
      <>
        {/* Titulo */}
        <h1>WeatherApp</h1>

        {/* Select de ciudades */}
        <SelectCity />

        {/* WeatherList */}
        <h2>Nombre de la ciudad donde se encuentra</h2>
        {/* WeatherCard */}
      </>
    </div>
  );
};
