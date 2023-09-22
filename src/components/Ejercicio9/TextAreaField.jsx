import { forwardRef } from 'react';

// forwardRef permite mandar un ref de un componente padre a un hijo
// Este es un patrón más avanzado, pero solo implica envolver el componente en forwardRef
const TextAreaField = forwardRef((props, ref) => {
  // type = "text" es un valor por defecto, si no se envia ese prop
  // ...other son todos los props que no se estan destructurando
  const { label, name, fieldsetClassName, ...other } = props;

  // Si no se envia un className, se usa el valor por defecto de columnas
  const className = fieldsetClassName || 'col-12 col-md-6 mb-2';

  // Workaround para montar los refs (?)
  // https://stackoverflow.com/questions/59522496/ref-from-react-forwardref-is-null
  if (!ref) return <></>;

  return (
    <fieldset className={className}>
      <label htmlFor={`${name}-input`} className='form-label'>
        {label}
      </label>
      <textarea
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
TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
