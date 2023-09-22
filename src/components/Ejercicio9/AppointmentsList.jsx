import Appointment from './Appointment';

const AppointmentsList = (props) => {
  const { appointments, setAppointments } = props;

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
