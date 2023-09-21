import { forwardRef } from 'react';

// forwardRef permite mandar un ref de un componente padre a un hijo
const InputField = forwardRef((props, ref) => {
  // type = "text" es el valor por defecto si no se envia ese prop
  // ...other son todos los props que no se estan destructurando
  const { label, name, type = 'text', ...other } = props;

  //  Workaround para montar los refs (?)
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
        ref={ref}
        // agrego al elemento input todos los demás props
        {...other}
      />
      <p className='invalid-feedback'>Revisa este campo</p>
    </fieldset>
  );
});

InputField.displayName = 'InputField';

export default InputField;
