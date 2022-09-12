import { useEffect, useState } from "react";
import {
  getWeatherForecast,
  getWeatherForecastForMiCity,
} from "../helpers/getWeatherForecast";
import { WeatherCard } from "./WeatherCard";

export const WeatherForecastGrid = ({ city }) => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  const getWeather = async () => {
    if (city === "miCity") {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const weatherList = await getWeatherForecastForMiCity({ lat, long });
        setHourlyWeather(() => weatherList);
      });
    } else {
      const weatherList = await getWeatherForecast(city);
      setHourlyWeather(() => weatherList);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  if (hourlyWeather.length === 0) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <h2>Pronóstico extendido</h2>
      <hr />
      <div className="row">
        {hourlyWeather.map((hour) => (
          <div key={hour.id} className="col-3">
            <WeatherCard weatherHour={hour} />
          </div>
        ))}
      </div>
    </>
  );
};
