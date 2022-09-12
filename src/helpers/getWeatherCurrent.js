import { API_KEY } from "../utils/constants";

export const getCurrentWeatherForCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const currentWeather = {
    id: data.id,
    atmosphericPressure: data.main.pressure,
    humidity: data.main.humidity,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    thermalSensation: data.main.feels_like,
    visibility: data.visibility,
    wind: data.wind.speed,
    description: data.weather[0].description,
    name: data.name,
  };

  return currentWeather;
};

export const getCurrentWeatherForMiCity = async (coords) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&units=metric&lang=es&appid=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const currentWeather = {
    id: data.id,
    atmosphericPressure: data.main.pressure,
    humidity: data.main.humidity,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    thermalSensation: data.main.feels_like,
    visibility: data.visibility,
    wind: data.wind.speed,
    name: data.name,
  };

  return currentWeather;
};
