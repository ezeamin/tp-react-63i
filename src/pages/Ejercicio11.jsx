import { useState } from 'react';

import SearchForm from '../components/Ejercicio11/SearchForm';
import NewsList from '../components/Ejercicio11/NewsList';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (query) => {
    // Cambiar un estado de carga para mostrar el mensaje e inhabilitar el botón de envío
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?language=es&q=${query}&pageSize=15&apiKey=${API_KEY}`
      );
      const data = await res.json();
      
      if (data.articles) {
        setNews(data.articles);
      }
    } catch (error) {
      alert('Ocurrio un error al buscar las noticias');
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Noticias</h1>
      <SearchForm fetchNews={fetchNews} isLoading={isLoading} type='news' />
      <NewsList news={news} isLoading={isLoading} />
    </>
  );
};

export default Ejercicio11;
