import { useEffect, useState } from "react";
import {
  getCurrentWeatherForCity,
  getCurrentWeatherForMiCity,
} from "../helpers/getWeatherCurrent";
import { WeatherCard } from "./WeatherCard";
import { WeatherCurrentCard } from "./WeatherCurrentCard";

export const WeatherCurrent = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState({});

  const getWeather = async () => {
    if (city === "miCity") {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const currentWeatherData = await getCurrentWeatherForMiCity({
          lat,
          long,
        });
        setCurrentWeather(() => currentWeatherData);
      });
    } else {
      const currentWeatherData = await getCurrentWeatherForCity(city);
      setCurrentWeather(() => currentWeatherData);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  if (!currentWeather.id) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h2>{currentWeather.name}</h2>
      <WeatherCurrentCard currentWeather={currentWeather} />
    </div>
  );
};
