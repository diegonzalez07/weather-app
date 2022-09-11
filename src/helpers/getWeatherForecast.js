export const getWeatherForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-34.57&lon=-58.42&appid=9a906dce0682400c53780ed9cc8f3bfd`;
  const resp = await fetch(url);
  const data = await resp.json();
  const hourlyForecast = data.list.map((hour) => ({
    id: hour.dt,
    temperature: hour.main.temp,
    thermalSensation: hour.main.feels_like,
    humidity: hour.main.humidity,
    atmosphericPressure: hour.main.pressure,
    icon: hour.weather[0].icon,
  }));

  return hourlyForecast;
};
