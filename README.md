# WeatherApp

## Instalación y ejecución

### Clonar repositorio e instalar dependencias

- Vía git y npm:

```
$ git clone https://github.com/diegonzalez07/weather-app.git [weather-app]
$ cd [weather-app]
$ npm install
```

### Establecer API-KEY en archivo .env

- Debe setear la API-KEY provista por OpenWeatherMap (https://openweathermap.org/) en el archivo .env-example y renombrar el mismo a .env.development.local o .env

```
VITE_API_KEY=api-key-personal
```

### Correr la aplicación en ambiente local

```
$ npm run dev
```


