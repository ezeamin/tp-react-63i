import { forwardRef } from 'react';

// forwardRef permite mandar un ref de un componente padre a un hijo
// Este es un patrón más avanzado, pero solo implica envolver el componente en forwardRef
const InputField = forwardRef((props, ref) => {
  // type = "text" es un valor por defecto, si no se envia ese prop
  // ...other son todos los props que no se estan destructurando
  const { label, name, type = 'text', ...other } = props;

  // Workaround para montar los refs (?)
  // https://stackoverflow.com/questions/59522496/ref-from-react-forwardref-is-null
  if (!ref) return <></>;

  return (
    <fieldset className='col-12 col-md-6 mb-2'>
      <label htmlFor={`${name}-input`} className='form-label'>
        {label}
      </label>
      <input
        type={type}
        id={`${name}-input`}
        className='form-control'
        required
        // paso el ref al input, para poder obtener luego su valor
        ref={ref}
        // agrego al elemento input todos los demás props, si es que hay
        {...other}
      />
      <p className='invalid-feedback'>Revisá este campo</p>
    </fieldset>
  );
});

// Esto es necesario para que el componente se muestre bien en React DevTools
// eslint da error si no lo agregamos, pero es basicamente ponerle el mismo nombre que el componente
InputField.displayName = 'InputField';

export default InputField;
