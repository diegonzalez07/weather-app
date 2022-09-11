import { useState } from "react";
import { SelectCity } from "./components/SelectCity";
import { WeatherForecastGrid } from "./components/WeatherForecastGrid";

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
            <h1>WeatherApp</h1>

            <SelectCity onSetCity={handleSetCity} selectedCity={city} />

            {/* WeatherList */}
            <h2>Nombre de la ciudad donde se encuentra</h2>
            <WeatherForecastGrid city={city} />
            {/* WeatherCard */}
          </>
        </div>
      </div>
    </div>
  );
};
