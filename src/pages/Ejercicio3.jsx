import { useState } from 'react';

const Ejercicio3 = (props) => {
  const { message: propsMessage } = props;

  const [message, setMessage] = useState(propsMessage);

  const handleChange = () => {
    setMessage((state) => state + ' (from changed state)!');
  };

  return (
    <>
      <h1>Hello {message}</h1>
      <button onClick={handleChange} className='btn btn-primary mt-3'>Click me!</button>
    </>
  );
};
export default Ejercicio3;
