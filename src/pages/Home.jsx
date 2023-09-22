import LinkButton from '../components/Home/LinkButton';

const ejercicios = Array.from({ length: 11 }, (_, i) => i + 1);

const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center gap-3'>
      <h1>Ejercicios React</h1>
      {ejercicios.map((ejercicio) => (
        <LinkButton key={ejercicio} index={ejercicio} />
      ))}
    </section>
  );
};

export default Home;
