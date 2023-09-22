import { useState } from 'react';

const SearchForm = (props) => {
  const { fetchNews, isLoading } = props;

  const [searchValue, setSearchValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim().length === 0) {
      setIsInvalid(true);
      return;
    } else {
      setIsInvalid(false);
    }

    fetchNews(searchValue);
  };

  return (
    <form className='card w-100 p-4' onSubmit={handleSubmit}>
      <div className='alert alert-info'>
        <p className='mb-0'>
          No se utiliza las categorias porque la API ya no permite filtrar por
          categorias
        </p>
      </div>
      <fieldset className='d-flex'>
        <label htmlFor='search-input' className='me-2 mt-2'>
          Buscar:
        </label>
        <div className='w-100'>
          <input
            type='text'
            id='search-input'
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
          />
          <div className='invalid-feedback'>
            Introduce un parámetro de búsqueda
          </div>
        </div>
      </fieldset>
      <div className='text-end'>
        <button
          type='submit'
          disabled={isLoading}
          className='btn btn-primary mt-2'
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
