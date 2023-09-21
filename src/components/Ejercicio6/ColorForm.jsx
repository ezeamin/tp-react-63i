import { useState } from 'react';

import ColorPicker from './ColorPicker';
import { generateRandomId } from '../../helpers/helpers';

const ColorForm = (props) => {
  const { setColors } = props;

  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors((prevColors) => [
      ...prevColors,
      {
        id: generateRandomId(),
        value: color,
      },
    ]);
  };

  return (
    <form className='card py-3' onSubmit={handleSubmit}>
      <h2 className='ps-3 pb-3'>Administrar colores</h2>
      <div className='bg-dark py-3 container d-flex justify-content-center align-items-center gap-3'>
        <ColorPicker color={color} setColor={setColor} />
        <div className='bg-light rounded px-3 py-2 h-100'>
          <p className='mb-0'>{color}</p>
        </div>
      </div>
      <div className='d-flex justify-content-end container'>
        <button type='submit' className='btn btn-dark mt-4'>
          Guardar
        </button>
      </div>
    </form>
  );
};
export default ColorForm;
