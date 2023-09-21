import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center gap-3'>
      <h1>Ejercicios React</h1>
      <Link to='/ejercicio-1' className='btn btn-light'>
        &gt; Ejercicio 1
      </Link>
      <Link to='/ejercicio-2' className='btn btn-light'>
        &gt; Ejercicio 2
      </Link>
      <Link to='/ejercicio-3' className='btn btn-light'>
        &gt; Ejercicio 3
      </Link>
      <Link to='/ejercicio-4' className='btn btn-light'>
        &gt; Ejercicio 4
      </Link>
      <Link to='/ejercicio-5' className='btn btn-light'>
        &gt; Ejercicio 5
      </Link>
      <Link to='/ejercicio-6' className='btn btn-light'>
        &gt; Ejercicio 6
      </Link>
      <Link to='/ejercicio-7' className='btn btn-light'>
        &gt; Ejercicio 7
      </Link>
      <Link to='/ejercicio-8' className='btn btn-light'>
        &gt; Ejercicio 8
      </Link>
      <Link to='/ejercicio-9' className='btn btn-light'>
        &gt; Ejercicio 9
      </Link>
      <Link to='/ejercicio-10' className='btn btn-light'>
        &gt; Ejercicio 10
      </Link>
    </section>
  );
};

export default Home;
