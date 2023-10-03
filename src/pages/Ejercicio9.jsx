import { useEffect, useState } from 'react';

import AppointmentForm from '../components/Ejercicio9/AppointmentForm';
import AppointmentsList from '../components/Ejercicio9/AppointmentsList';

const appointmentsLS = JSON.parse(localStorage.getItem('appointments')) || [];

const Ejercicio9 = () => {
  const [appointments, setAppointments] = useState(appointmentsLS);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <>
      <AppointmentForm setAppointments={setAppointments}/>
      <AppointmentsList appointments={appointments} setAppointments={setAppointments}/>
    </>
  );
};
export default Ejercicio9;
