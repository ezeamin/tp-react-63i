import { useState } from 'react';

import AppointmentForm from '../components/Ejercicio9/AppointmentForm';
import AppointmentsList from '../components/Ejercicio9/AppointmentsList';

const Ejercicio9 = () => {
  const appointmentsLS = JSON.parse(localStorage.getItem('appointments')) || [];
  const [appointments, setAppointments] = useState(appointmentsLS);

  return (
    <>
      <AppointmentForm setAppointments={setAppointments}/>
      <AppointmentsList appointments={appointments} setAppointments={setAppointments}/>
    </>
  );
};
export default Ejercicio9;
