import { useEffect, useState } from "react";
import { getWeatherForecast } from "../helpers/getWeatherForecast";
import { WeatherCard } from "./WeatherCard";

export const WeatherForecastGrid = ({ city }) => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  const getWeather = async () => {
    const weatherList = await getWeatherForecast(city);
    setHourlyWeather(() => weatherList);
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  if (hourlyWeather.length === 0) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <h3>{city}</h3>
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
