import { useEffect } from 'react';

import Appointment from './Appointment';

const AppointmentsList = (props) => {
  const { appointments, setAppointments } = props;

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <section className='row mt-3 w-100'>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          setAppointments={setAppointments}
        />
      ))}
    </section>
  );
};
export default AppointmentsList;
