import { useRef } from 'react';

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
        <fieldset className='col-12 col-md-6 mb-2'>
          <label htmlFor='name-input' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            id='name-input'
            className='form-control'
            required
            ref={nameInput}
          />
          <p className='invalid-feedback'>Revisa este campo</p>
        </fieldset>
        <fieldset className='col-12 col-md-6 mb-2'>
          <label htmlFor='lastName-input' className='form-label'>
            Apellido
          </label>
          <input
            type='text'
            id='lastName-input'
            className='form-control'
            required
            ref={lastNameInput}
          />
          <p className='invalid-feedback'>Revisa este campo</p>
        </fieldset>
        <fieldset className='col-12 col-md-6 mb-2'>
          <label htmlFor='dni-input' className='form-label'>
            DNI
          </label>
          <input
            type='number'
            id='dni-input'
            className='form-control'
            required
            ref={dniInput}
          />
          <p className='invalid-feedback'>Revisa este campo</p>
        </fieldset>
        <fieldset className='col-12 col-md-6 mb-2'>
          <label htmlFor='email-input' className='form-label'>
            Email
          </label>
          <input
            type='email'
            id='email-input'
            className='form-control'
            required
            ref={emailInput}
          />
          <p className='invalid-feedback'>Revisa este campo</p>
        </fieldset>
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
