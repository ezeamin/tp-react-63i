import LinkButton from '../components/Home/LinkButton';

const ejercicios = Array.from({ length: 15 }, (_, i) => i + 1);

const Home = () => {
  return (
    <section className='row align-items-center justify-content-center gap-3'>
      <h1 className='text-center'>Ejercicios React</h1>
      {ejercicios.map((ejercicio) => (
        <LinkButton key={ejercicio} index={ejercicio} />
      ))}
    </section>
  );
};

export default Home;
