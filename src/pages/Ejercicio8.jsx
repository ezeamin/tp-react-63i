import { useRef } from 'react';
import InputField from '../components/Ejercicio8/InputField';

const Ejercicio8 = () => {
  const nameInput = useRef();
  const lastNameInput = useRef();
  const dniInput = useRef();
  const emailInput = useRef();

  const validateForm = () => {
    const errors = {};

    const name = nameInput.current?.value;
    if (!name || name.trim().length < 3) {
      errors['name'] = true;
      nameInput.current?.classList.add('is-invalid');
    } else {
      emailInput.current?.classList.remove('is-invalid');
    }

    const lastName = lastNameInput.current?.value;
    if (!lastName || lastName.trim().length < 3) {
      errors['lastName'] = true;
      lastNameInput.current?.classList.add('is-invalid');
    } else {
      lastNameInput.current?.classList.remove('is-invalid');
    }

    const dni = dniInput.current?.value;
    if (!dni || dni.trim().length < 7 || dni.trim().length > 8) {
      errors['dni'] = true;
      dniInput.current?.classList.add('is-invalid');
    } else {
      dniInput.current?.classList.remove('is-invalid');
    }

    const email = emailInput.current?.value;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailRegex.test(email)) {
      errors['email'] = true;
      emailInput.current?.classList.add('is-invalid');
    } else {
      emailInput.current?.classList.remove('is-invalid');
    }

    // Si el objeto errors tiene alguna propiedad, significa que hay errores
    return Object.keys(errors).length === 0;
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
          type="number"
          max='99999999'
          min='1000000'
        />
        <InputField ref={emailInput} label='Email' name='email' type="email" />
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
