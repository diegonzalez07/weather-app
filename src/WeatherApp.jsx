import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { SelectCity } from "./components/SelectCity";
import { WeatherForecastGrid } from "./components/WeatherForecastGrid";

export const WeatherApp = () => {
  const [city, setCity] = useState("miCity");
  const [extendedForecast, setExtendedForecast] = useState([]);

  const handleSetCity = (value) => {
    setCity(() => value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <SelectCity onSetCity={handleSetCity} selectedCity={city} />
        {/* WeatherList */}
        <h2>Nombre de la ciudad donde se encuentra</h2>
        <WeatherForecastGrid city={city} />
        {/* WeatherCard */}
      </Container>
    </>
  );
};
