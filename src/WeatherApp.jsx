import { useState } from "react";
import { SelectCity } from "./components/SelectCity";

export const WeatherApp = () => {
  const [city, setCity] = useState("miCity");
  const [extendedForecast, setExtendedForecast] = useState([]);

  const handleSetCity = (value) => {
    setCity(() => value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <>
            {/* Titulo */}
            <h1>WeatherApp</h1>

            {/* Select de ciudades */}
            <SelectCity onSetCity={handleSetCity} selectedCity={city} />

            {/* WeatherList */}
            <h2>Nombre de la ciudad donde se encuentra</h2>
            {/* WeatherCard */}
          </>
        </div>
      </div>
    </div>
  );
};
