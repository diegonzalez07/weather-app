export const getWeatherForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=es&appid=9a906dce0682400c53780ed9cc8f3bfd`;
  const resp = await fetch(url);
  const data = await resp.json();
  const hourlyForecast = data.list.map((hour) => ({
    id: hour.dt,
    atmosphericPressure: hour.main.pressure,
    hour: hour.dt_txt,
    humidity: hour.main.humidity,
    icon: hour.weather[0].icon,
    temperature: hour.main.temp,
    thermalSensation: hour.main.feels_like,
  }));
  console.log(hourlyForecast);
  return hourlyForecast;
};

export const getWeatherForecastForMiCity = async (coords) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&units=metric&lang=es&appid=9a906dce0682400c53780ed9cc8f3bfd`;
  const resp = await fetch(url);
  const data = await resp.json();
  const hourlyForecast = data.list.map((hour) => ({
    id: hour.dt,
    atmosphericPressure: hour.main.pressure,
    hour: hour.dt_txt,
    humidity: hour.main.humidity,
    icon: hour.weather[0].icon,
    temperature: hour.main.temp,
    thermalSensation: hour.main.feels_like,
  }));
  console.log(hourlyForecast);
  return hourlyForecast;
};
