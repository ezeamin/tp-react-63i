import { useRef } from 'react';

import InputField from '../Ejercicio8/InputField';
import TextAreaField from './TextAreaField';

import {
  generateRandomId,
  isPastDate,
  isValidDate,
} from '../../helpers/helpers';

// Este es un ejemplo IDEAL del ejercicio.
// Esto significa que tiene muchas cosas avanzadas que pueden
// no ocurrirles a todos los alumnos.
const AppointmentForm = (props) => {
  const { setAppointments } = props;

  // Utilizo refs para componentes no controlados
  const mascotNameInput = useRef();
  const ownerNameInput = useRef();
  const dateInput = useRef();
  const timeInput = useRef();
  const symptomsInput = useRef();

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

    // Nombre de mascota
    const mascotName = mascotNameInput.current?.value;
    if (
      !mascotName ||
      mascotName.trim().length < 3 ||
      mascotName.trim().length > 20
    ) {
      hasError = true;
      mascotNameInput.current?.classList.add('is-invalid');
    } else {
      mascotNameInput.current?.classList.remove('is-invalid');
    }

    // Nombre de dueño
    const ownerName = ownerNameInput.current?.value;
    if (
      !ownerName ||
      ownerName.trim().length < 3 ||
      ownerName.trim().length > 20
    ) {
      hasError = true;
      ownerNameInput.current?.classList.add('is-invalid');
    } else {
      ownerNameInput.current?.classList.remove('is-invalid');
    }

    // Fecha
    const date = dateInput.current?.value;
    if (!date || !isValidDate(new Date(date) || isPastDate(date))) {
      hasError = true;
      dateInput.current?.classList.add('is-invalid');
    } else {
      dateInput.current?.classList.remove('is-invalid');
    }

    // Tiempo
    const time = timeInput.current?.value;
    if (
      !time ||
      time.trim().length !== 5 ||
      time.split(':')[0] > 23 ||
      time.split(':')[1] > 59
    ) {
      hasError = true;
      timeInput.current?.classList.add('is-invalid');
    } else {
      timeInput.current?.classList.remove('is-invalid');
    }

    // Sintomas
    const symptoms = symptomsInput.current?.value;
    if (!symptoms || symptoms.trim().length < 3) {
      hasError = true;
      symptomsInput.current?.classList.add('is-invalid');
    } else {
      symptomsInput.current?.classList.remove('is-invalid');
    }

    // Si no hay errores, devuelve true
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Obtener citas ya cargadas y agregar la nueva
      const appointments =
        JSON.parse(localStorage.getItem('appointments')) || [];

      // Agregar la nueva cita
      appointments.push({
        id: generateRandomId(),
        mascotName: mascotNameInput.current?.value.trim(),
        ownerName: ownerNameInput.current?.value.trim(),
        date: dateInput.current?.value,
        time: timeInput.current?.value,
        symptoms: symptomsInput.current?.value.trim(),
      });

      localStorage.setItem('appointments', JSON.stringify(appointments));

      // Actualizar el estado de la lista de citas
      setAppointments(appointments);

      // Resetear el formulario
      e.target.reset();

      alert('Cita agendada!');
    }
  };

  return (
    <form
      className='bg-light text-dark p-3 rounded w-100'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center'>Veterinaria</h1>
      <p className='text-center'>Llene el formulario para crear una cita</p>
      <hr />
      <section className='row'>
        {/* Utilizo un componente genérico, para que pueda ser reutilizado */}
        {/* en otros componentes. Defino props básicas, que son las cosas que */}
        {/* cambian entre cada elemento */}
        <InputField
          ref={mascotNameInput}
          label='Nombre de mascota'
          name='mascotName'
          maxLength='20'
        />
        <InputField
          ref={ownerNameInput}
          label='Nombre del dueño'
          name='ownerName'
          maxLength='20'
        />
        <InputField ref={dateInput} label='Fecha' name='date' type='date' />
        <InputField ref={timeInput} label='Hora' name='time' type='time' />
        <TextAreaField
          ref={symptomsInput}
          label='Sintomas'
          name='symptoms'
          fieldsetClassName='col-12 mb-2'
        />
      </section>
      <div className='text-end'>
        <button type='submit' className='btn btn-primary'>
          Agregar nueva cita
        </button>
      </div>
    </form>
  );
};
export default AppointmentForm;
