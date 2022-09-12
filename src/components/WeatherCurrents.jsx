import { WeatherCurrentCard } from "./WeatherCurrentCard";

export const WeatherCurrent = ({ currentWeather }) => {
  return (
    <div className="mt-3">
      <h2>{currentWeather.name}</h2>
      <WeatherCurrentCard currentWeather={currentWeather} />
    </div>
  );
};
