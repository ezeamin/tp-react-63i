import { useState } from 'react';

import SearchForm from '../components/Ejercicio11/SearchForm';
import NewsList from '../components/Ejercicio11/NewsList';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (query) => {
    setIsLoading(true);

    const res = await fetch(
      `https://newsapi.org/v2/everything?language=es&q=${query}&pageSize=15&apiKey=${API_KEY}`
    );
    const data = await res.json();
    setNews(data.articles);

    setIsLoading(false);
  };

  return (
    <>
      <h1>Noticias</h1>
      <SearchForm fetchNews={fetchNews} isLoading={isLoading} />
      <NewsList news={news} isLoading={isLoading} />
    </>
  );
};

export default Ejercicio11;
