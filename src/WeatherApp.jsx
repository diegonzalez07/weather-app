import { useState } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { SelectCity } from "./components/SelectCity";
import { Spinner } from "./components/Spinner";
import { WeatherCurrent } from "./components/WeatherCurrents";
import { WeatherForecastGrid } from "./components/WeatherForecastGrid";
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
