import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { SelectCity } from "./components/SelectCity";
import { WeatherCurrent } from "./components/WeatherCurrents";
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
        <WeatherCurrent city={city} />
        <WeatherForecastGrid city={city} />
      </Container>
    </>
  );
};
