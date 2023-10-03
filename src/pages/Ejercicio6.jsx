import { useEffect, useState } from 'react';

import ColorForm from '../components/Ejercicio6/ColorForm';
import ColorList from '../components/Ejercicio6/ColorList';

const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const Ejercicio6 = () => {
  const [colors, setColors] = useState(colorsLS);

  // Ejecutar cada vez que cambie colors
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  return (
    <div className='w-100'>
      <ColorForm setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
};
export default Ejercicio6;
