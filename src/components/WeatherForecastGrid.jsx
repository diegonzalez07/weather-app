import { WeatherCard } from "./WeatherCard";

export const WeatherForecastGrid = ({ hourlyWeather }) => {
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
