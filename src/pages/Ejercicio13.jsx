import { useState } from 'react';

import SearchForm from '../components/Ejercicio11/SearchForm';
import WeatherInfo from '../components/Ejercicio13/WeatherInfo';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Ejercicio13 = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (city) => {
    // Cambiar un estado de carga para mostrar el mensaje e inhabilitar el botón de envío
    setIsLoading(true);

    try {
      // Primer llamado para pasar de ciudad a coordenadas
      const locationRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const locationData = await locationRes.json();

      // Si no vuelven resultados, muestro un mensaje y corto la ejecucion
      if (locationData.length === 0) {
        alert('Ciudad no encontrada!');

        setIsLoading(false);
        setLocation(null);
        setWeather(null);
        
        return;
      }

      // Extraigo los datos
      const { lat, lon } = locationData[0];
      setLocation(locationData[0]);

      // Segundo llamado para traer informacion del tiempo
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily&lang=es&appid=${API_KEY}`
      );
      const weatherData = await weatherRes.json();

      setWeather(weatherData);
    } catch (error) {
      alert('Ocurrio un error al buscar el clima');
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Clima</h1>
      <SearchForm fetchNews={fetchNews} isLoading={isLoading} />
      <WeatherInfo
        weather={weather}
        isLoading={isLoading}
        location={location}
      />
    </>
  );
};

export default Ejercicio13;
