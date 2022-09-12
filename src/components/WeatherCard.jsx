import { getFormatBy } from "../utils/dateUtils";

export const WeatherCard = ({ weatherHour }) => {
  const {
    id,
    atmosphericPressure,
    hour,
    humidity,
    icon,
    temperature,
    thermalSensation,
  } = weatherHour;
  return (
    <div className="card mb-3 shadow">
      <h5 className="card-header text-center">
        {`${getFormatBy("day", hour)} | ${getFormatBy("hour", hour)} hs.`}
      </h5>

      <div className="container mt-2">
        <div className="row align-items-center p-3">
          <div className="col">
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              className="rounded img-thumbnail"
              height="0.3rem"
              alt={`${icon}_${id}`}
            />
          </div>
          <div className="col">
            <h2 className="m-0 text-end">{temperature.toFixed(1)}°C</h2>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="container mt-2">
          <div className="row align-items-center text-center">
            <div className="col">
              <p className="m-0">ST: {thermalSensation.toFixed(1)}°C</p>
            </div>
            <div className="col">
              <p className="m-0">Hum: {humidity}%</p>
            </div>
          </div>
          <hr />
          <div className="row align-items-center text-center">
            <div className="col">
              <p className="m-0">
                Pres AT: {atmosphericPressure} Pa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
