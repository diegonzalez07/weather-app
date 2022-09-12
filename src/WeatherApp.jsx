import { useState } from "react";
import {
  Container,
  Navbar,
  SelectCity,
  Spinner,
  WeatherCurrent,
  WeatherForecastGrid,
} from "./components";
import { useGetWeatherCurrent } from "./hooks/useGetWeatherCurrent";

export const WeatherApp = () => {
  const [city, setCity] = useState("miCity");

  const { currentWeather, hourlyWeather, isLoading } =
    useGetWeatherCurrent(city);

  const handleSetCity = (value) => {
    setCity(() => value);
  };

  return (
    <>
      <Navbar />

      <Container>
        <SelectCity onSetCity={handleSetCity} selectedCity={city} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <WeatherCurrent currentWeather={currentWeather} />
            <WeatherForecastGrid hourlyWeather={hourlyWeather} />
          </>
        )}
      </Container>
    </>
  );
};
