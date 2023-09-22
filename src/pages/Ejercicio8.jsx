import { useRef } from 'react';

import InputField from '../components/Ejercicio8/InputField';

// Este es un ejemplo IDEAL del ejercicio.
// Esto significa que tiene muchas cosas avanzadas que pueden
// no ocurrirles a todos los alumnos.
const Ejercicio8 = () => {
  // Utilizo refs para componentes no controlados
  const nameInput = useRef();
  const lastNameInput = useRef();
  const dniInput = useRef();
  const emailInput = useRef();

  const validateForm = () => {
    // Arranco suponiendo que no hay errores
    let hasError = false;

    // Las validaciones son igual que siempre, y varían según
    // el campo que se esté validando.

    // Las validaciones también podrían moverse a un archivo
    // aparte, para que puedan ser reutilizadas más adelante en
    // otros formularios.

    // Sin embargo, para simplificar el ejercicio, las dejamos
    // acá.

    // Nombre
    const name = nameInput.current?.value;
    if (!name || name.trim().length < 3) {
      hasError = true;
      nameInput.current?.classList.add('is-invalid');
    } else {
      emailInput.current?.classList.remove('is-invalid');
    }

    // Apellido
    const lastName = lastNameInput.current?.value;
    if (!lastName || lastName.trim().length < 3) {
      hasError = true;
      lastNameInput.current?.classList.add('is-invalid');
    } else {
      lastNameInput.current?.classList.remove('is-invalid');
    }

    // DNI
    const dni = dniInput.current?.value;
    if (!dni || dni.trim().length < 7 || dni.trim().length > 8) {
      hasError = true;
      dniInput.current?.classList.add('is-invalid');
    } else {
      dniInput.current?.classList.remove('is-invalid');
    }

    // Email
    const email = emailInput.current?.value;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailRegex.test(email)) {
      hasError = true;
      emailInput.current?.classList.add('is-invalid');
    } else {
      emailInput.current?.classList.remove('is-invalid');
    }

    // Si no hay errores, devuelve true
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      alert('Felicidades! Podés llenar formularios!');
    }
  };

  return (
    <form
      className='bg-light text-dark p-3 rounded w-100'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center'>Formulario</h1>
      <section className='row'>
        {/* Utilizo un componente genérico, para que pueda ser reutilizado */}
        {/* en otros componentes. Defino props básicas, que son las cosas que */}
        {/* cambian entre cada elemento */}
        <InputField ref={nameInput} label='Nombre' name='name' maxLength='20' />
        <InputField
          ref={lastNameInput}
          label='Apellido'
          name='lastName'
          maxLength='20'
        />
        <InputField
          ref={dniInput}
          label='DNI'
          name='dni'
          type='number'
          max='99999999'
          min='1000000'
        />
        <InputField ref={emailInput} label='Email' name='email' type='email' />
      </section>
      <div className='text-end'>
        <button type='submit' className='btn btn-primary'>
          Enviar
        </button>
      </div>
    </form>
  );
};
export default Ejercicio8;
