import { useEffect, useState } from "react";
import {
  getCurrentWeatherForCity,
  getCurrentWeatherForMiCity,
} from "../helpers/getWeatherCurrent";
import {
  getWeatherForecast,
  getWeatherForecastForMiCity,
} from "../helpers/getWeatherForecast";

export const useGetWeatherCurrent = (city) => {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    setIsLoading(true);

    if (city === "miCity") {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const weatherList = await getWeatherForecastForMiCity({ lat, long });
        setHourlyWeather(() => weatherList);

        const currentWeatherData = await getCurrentWeatherForMiCity({
          lat,
          long,
        });
        setCurrentWeather(() => currentWeatherData);
        setIsLoading(false);
      });
    } else {
      const weatherList = await getWeatherForecast(city);
      setHourlyWeather(() => weatherList);

      const currentWeatherData = await getCurrentWeatherForCity(city);
      setCurrentWeather(() => currentWeatherData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return {
    isLoading,
    currentWeather,
    hourlyWeather,
  };
};
