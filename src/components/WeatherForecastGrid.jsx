import { getWeatherForecast } from "../helpers/getWeatherForecast";

export const WeatherForecastGrid = ({ city }) => {
  getWeatherForecast(city);

  return (
    <>
      <h3>{city}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
