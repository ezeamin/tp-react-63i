import { setFirstLetterToUpperCase } from '../../helpers/helpers';

const WeatherInfo = (props) => {
  const { isLoading, location, weather } = props;

  if (isLoading) {
    return <p className='mt-3 text-center text-bold'>Cargando...</p>;
  }

  if (!weather) {
    // Si no hay datos, no mostrar nada
    return null;
  }

  return (
    <section className='mt-3 card text-center'>
      <header className='card-header px-5'>
        <h2>{location.name}</h2>
        <p>
          {setFirstLetterToUpperCase(weather.current.weather[0].description)}
        </p>
      </header>
      <div className='card-body'>
        <h3>{weather.current.temp}°C</h3>
        <p>Humedad: {weather.current.humidity}%</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
          alt={weather.current.weather[0].description}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
export default WeatherInfo;
