import React from "react";
import { capitalizeFirstLetter } from "../utils/stringUtils";

export const WeatherCurrentCard = ({ currentWeather }) => {
  const {
    atmosphericPressure,
    humidity,
    icon,
    temperature,
    thermalSensation,
    visibility,
    wind,
    id,
  } = currentWeather;
  return (
    <div className="card text-bg-info mb-3 shadow-lg">
      <div className="card-body">
        <div className="container mt-2">
          <div className="row p-3 align-items-center">
            <div className="col-11">
              <div className="row align-items-center">
                <div className="col-3">
                  <h2 className="m-0">Temp: {temperature.toFixed(1)}°C</h2>
                </div>
                <div className="col-9">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <p className="m-0">
                        Sensación Térmica: {thermalSensation.toFixed(1)}°C
                      </p>
                    </div>
                    <div className="col">
                      <p className="m-0">Humedad: {humidity}%</p>
                    </div>
                    <div className="col">
                      <p className="m-0">Viento: {wind} km/h</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center">
                    <div className="col-5">
                      <p className="m-0">
                        Presión Atmosférica: {atmosphericPressure} hPa
                      </p>
                    </div>
                    <div className="col">
                      <p className="m-0">Visibilidad: {visibility} mts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1">
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className="rounded img-thumbnail"
                height="0.3rem"
                alt={`${icon}_${id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
